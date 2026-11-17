# BIQ Brain Studios — architecture (foundation)

Phase 0 is a product shell: design system, public site, account area, and three separate workspaces. It does not store events, take payments, or count votes.

## Stack in this app

The running app is React 19, TypeScript, TanStack Start, Vite and Tailwind CSS. PostgreSQL and Better Auth are already available in the project and stay **off** until the authentication phase. Lucide supplies icons.

Supabase is not connected. This environment publishes with a managed Postgres database and server functions, not a Supabase project. The table design below is ordinary PostgreSQL and can be applied as SQL migrations. Tenant safety will be enforced in server functions that only read and write rows for the signed-in user and their organisation. Do not put a service-role key, Paystack secret or Hubtel secret in frontend code. None of those credentials exist in this phase.

Currency default: GHS. Timezone default: Africa/Accra.

## Routes

| Area | Path | File |
| --- | --- | --- |
| Home | `/` | `src/routes/index.tsx` |
| Discover | `/discover` | `src/routes/discover.tsx` |
| Voting info | `/voting` | `src/routes/voting.tsx` |
| Pricing | `/pricing` | `src/routes/pricing.tsx` |
| About | `/about` | `src/routes/about.tsx` |
| Contact | `/contact` | `src/routes/contact.tsx` |
| Help | `/help` | `src/routes/help.tsx` |
| Log in | `/login` | `src/routes/login.tsx` |
| Register | `/register` | `src/routes/register.tsx` |
| Reset password | `/forgot-password` | `src/routes/forgot-password.tsx` |
| Workspace selector | `/app` | `src/routes/app.index.tsx` |
| Account | `/app/account/$section` | `src/routes/app.account.$section.tsx` |
| Events layout | `/app/events` | `src/routes/app.events.tsx` |
| Events overview | `/app/events/` | `src/routes/app.events.index.tsx` |
| Event section | `/app/events/$section` | `src/routes/app.events.$section.tsx` |
| Voting workspace | `/app/voting` | `src/routes/app.voting.tsx` |
| Admin layout | `/admin` | `src/routes/admin.tsx` |
| Admin overview | `/admin/` | `src/routes/admin.index.tsx` |
| Admin section | `/admin/$section` | `src/routes/admin.$section.tsx` |

Unknown event, account and admin slugs return the not-found page. Section copy lives in `src/config/navigation.ts`.

## Layouts

- `SiteLayout` — public header, mobile menu, footer.
- `AuthLayout` — split sign-in design. Forms explain that they do not create a session.
- `AccountFrame` — profile, organisation, notifications, subscription, settings.
- `WorkspaceShell` — navy sidebar used separately by Events, Voting and Super Admin. These dashboards are not combined.

## What is intentionally not live

- No user records, organisations, events, tickets or ballots.
- Contact, login, register and password forms do not persist or send anything.
- KPI cards show an em dash, not sample numbers.
- Discover has no placeholder events.
- `/admin` is visible and says so. It must be server-gated before any real admin data exists.
- Voting navigation does not open ballot tools.

## Roles to enforce later

Platform Super Admin, Platform Support, Organisation Owner, Organisation Admin, Event Manager, Finance Manager, Check-in Staff, Election Manager, Returning Officer, Attendee, Voter, Candidate.

An organisation must never read another organisation's private rows. Voting must keep voter credentials and participation apart from ballot selections. Payment status and election totals must be written only on the server after verification.

## Planned tables (not migrated yet)

Identity: `profiles`, `organisations`, `organisation_members`, `roles`, `permissions`, `role_permissions`, `invitations`.

Events: `events`, `event_categories`, `event_pages`, `event_images`, `event_schedules`, `event_tasks`, `event_teams`, `event_team_members`, `ticket_types`, `registrations`, `registration_answers`, `tickets`, `ticket_scans`, `event_expenses`, `event_budgets`, `event_vendors`, `event_sponsors`, `event_announcements`, `event_feedback`.

Payments: `payment_transactions`, `payment_webhook_events`, `refunds`, `subscriptions`, `subscription_plans`, `plan_features`, `invoices`, `platform_commissions`, `payout_records`.

Voting: `elections`, `election_positions`, `candidates`, `voter_rolls`, `voter_credentials`, `voter_participation`, `ballot_definitions`, `ballot_options`, `ballot_submissions`, `ballot_selections`, `election_audit_logs`, `election_results`.

Platform: `platform_admins`, `support_tickets`, `security_events`, `admin_activity_logs`, `user_notifications`, `notification_templates`, `system_settings`, `feature_flags`.

Use UUID primary keys, foreign keys, and indexes on `organisation_id` and foreign keys. Add tables only when a feature needs them.

## Next implementation

1. Turn on email-and-password accounts, email verification and password recovery. Gate `/app` and `/admin` after the session is known.
2. Organisations, membership and role checks on the server.
3. Create and publish an event, with an empty public listing that fills from the database.
4. Paystack and Hubtel on the server only: verify webhooks, then issue a QR ticket.
5. Check-in scans, budgets, tasks, sponsors and reports.
6. Subscriptions and a real super-admin allow-list.
7. Voting, with ballot secrecy and server-side counts.
8. Rate limits, audit logs, MFA for privileged roles, and a backup plan before launch.

Do not describe the product as certified or fraud-proof.
