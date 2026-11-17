import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { authMiddleware } from "@/lib/auth/middleware";

export type OrganisationSummary = {
  id: string;
  name: string;
  role: string;
};

export type ProfileRecord = {
  fullName: string;
  phone: string;
};

const organisationName = z.string().trim().min(2).max(80);
const phone = z
  .string()
  .trim()
  .max(16)
  .refine((value) => value === "" || /^(\+233|0)[235]\d{8}$/.test(value.replace(/\s/g, "")), {
    message: "Use a Ghanaian number such as 0241234567",
  });

function parseInput<T>(schema: z.ZodType<T>, input: unknown): T {
  const result = schema.safeParse(input);
  if (!result.success) throw new Error(result.error.issues[0]?.message ?? "Check the form");
  return result.data;
}

const profileInput = z.object({
  fullName: z.string().trim().min(2).max(80),
  phone,
});

async function sqlClient() {
  const { getSql } = await import("@/lib/db");
  return getSql();
}

async function ensureProfile(userId: string) {
  const sql = await sqlClient();
  await sql`insert into profiles (user_id) values (${userId}) on conflict (user_id) do nothing`;
  return sql;
}

export const listMyOrganisations = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<OrganisationSummary[]> => {
    const sql = await ensureProfile(context.userId);
    return sql<OrganisationSummary>`
      select o.id, o.name, m.role
      from organisations o
      join organisation_members m on m.organisation_id = o.id
      where m.user_id = ${context.userId}
      order by o.created_at
    `;
  });

export const createOrganisation = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => parseInput(z.object({ name: organisationName }), input))
  .handler(async ({ context, data }): Promise<OrganisationSummary> => {
    const sql = await ensureProfile(context.userId);
    const id = crypto.randomUUID();
    await sql`insert into organisations (id, name, created_by) values (${id}, ${data.name}, ${context.userId})`;
    await sql`
      insert into organisation_members (organisation_id, user_id, role)
      values (${id}, ${context.userId}, ${"owner"})
    `;
    return { id, name: data.name, role: "owner" };
  });

export const getMyProfile = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<ProfileRecord> => {
    const sql = await ensureProfile(context.userId);
    const rows = await sql<{ full_name: string | null; phone: string | null }>`
      select full_name, phone from profiles where user_id = ${context.userId}
    `;
    const row = rows[0];
    return { fullName: row?.full_name ?? "", phone: row?.phone ?? "" };
  });

export const updateMyProfile = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => parseInput(profileInput, input))
  .handler(async ({ context, data }): Promise<ProfileRecord> => {
    const sql = await ensureProfile(context.userId);
    const phoneValue = data.phone.replace(/\s/g, "");
    await sql`
      update profiles
      set full_name = ${data.fullName}, phone = ${phoneValue}
      where user_id = ${context.userId}
    `;
    return { fullName: data.fullName, phone: phoneValue };
  });

export const getPlatformAccess = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<{ isAdmin: boolean }> => {
    const sql = await sqlClient();
    const rows = await sql<{ user_id: string }>`
      select user_id from platform_admins where user_id = ${context.userId}
    `;
    return { isAdmin: rows.length > 0 };
  });
