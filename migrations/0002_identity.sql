create table if not exists profiles (
  user_id text primary key,
  full_name text,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists organisations (
  id text primary key,
  name text not null,
  created_by text not null,
  created_at timestamptz not null default now()
);

create table if not exists organisation_members (
  organisation_id text not null references organisations (id) on delete cascade,
  user_id text not null,
  role text not null,
  created_at timestamptz not null default now(),
  primary key (organisation_id, user_id)
);

create index if not exists organisation_members_user_idx on organisation_members (user_id);

create table if not exists platform_admins (
  user_id text primary key,
  created_at timestamptz not null default now()
);
