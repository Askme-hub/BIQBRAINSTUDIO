import { useEffect, useState } from "react";
import { listMyOrganisations, type OrganisationSummary } from "@/lib/identity";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

const STORAGE_KEY = "biq.active-organisation";

export function rememberOrganisation(id: string) {
  localStorage.setItem(STORAGE_KEY, id);
}

export function useOrganisations(refreshKey = 0) {
  const { user } = useCurrentUserState();
  const userId = user?.id ?? null;
  const [organisations, setOrganisations] = useState<OrganisationSummary[] | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    listMyOrganisations()
      .then((rows) => {
        if (cancelled) return;
        setOrganisations(rows);
        const stored = localStorage.getItem(STORAGE_KEY);
        const active = rows.find((row) => row.id === stored) ?? rows[0] ?? null;
        setActiveId(active?.id ?? null);
        if (active) localStorage.setItem(STORAGE_KEY, active.id);
        setError(null);
      })
      .catch(() => {
        if (!cancelled) setError("Organisations could not be loaded.");
      });
    return () => {
      cancelled = true;
    };
  }, [userId, refreshKey]);

  const active = organisations?.find((row) => row.id === activeId) ?? null;
  return { organisations, active, error, setActiveId };
}
