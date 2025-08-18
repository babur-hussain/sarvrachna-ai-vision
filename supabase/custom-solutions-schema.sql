-- Extensions (safe to run multiple times)
create extension if not exists pgcrypto;
create extension if not exists citext;

-- Enum for status choices
do $$
begin
  if not exists (select 1 from pg_type where typname = 'custom_solution_status') then
    create type custom_solution_status as enum (
      'new',
      'reviewing', 
      'contacted',
      'proposal_sent',
      'closed'
    );
  end if;
end$$;

-- Table
create table if not exists public.custom_solutions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email citext not null,
  phone text not null,
  company text,
  website text,
  project_type text not null,
  budget text not null,
  timeline text not null,
  description text not null,
  requirements text,
  additional_info text,
  status custom_solution_status default 'new' not null,
  metadata jsonb default '{}'::jsonb
);

-- updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_custom_solutions_updated_at on public.custom_solutions;
create trigger trg_custom_solutions_updated_at
  before update on public.custom_solutions
  for each row
  execute function public.set_updated_at();

-- Indexes
create index if not exists custom_solutions_created_at_idx on public.custom_solutions(created_at desc);
create index if not exists custom_solutions_email_idx on public.custom_solutions(email);
create index if not exists custom_solutions_status_idx on public.custom_solutions(status);
create index if not exists custom_solutions_project_type_idx on public.custom_solutions(project_type);

-- Row Level Security (RLS)
alter table public.custom_solutions enable row level security;

-- Policies
drop policy if exists "allow insert from anon" on public.custom_solutions;
create policy "allow insert from anon" on public.custom_solutions
  for insert with check (true);

drop policy if exists "allow select to service_role" on public.custom_solutions;
create policy "allow select to service_role" on public.custom_solutions
  for select using (auth.role() = 'service_role');

drop policy if exists "allow modify to service_role" on public.custom_solutions;
create policy "allow modify to service_role" on public.custom_solutions
  for update using (auth.role() = 'service_role');

drop policy if exists "allow delete to service_role" on public.custom_solutions;
create policy "allow delete to service_role" on public.custom_solutions
  for delete using (auth.role() = 'service_role');

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON public.custom_solutions TO anon;
GRANT ALL ON public.custom_solutions TO service_role;

-- Insert some sample data for testing (optional)
insert into public.custom_solutions (
  name, 
  email, 
  phone, 
  company, 
  project_type, 
  budget, 
  timeline, 
  description
) values 
(
  'Rajesh Kumar',
  'rajesh.kumar@techcorp.in',
  '+91-98765-43210',
  'TechCorp India',
  'AI Integration & Chatbots',
  '₹5,00,000 - ₹10,00,000',
  '5-6 months',
  'We need an AI chatbot for our e-commerce platform to handle customer queries and provide personalized recommendations.'
),
(
  'Priya Sharma',
  'priya.sharma@innovate.com',
  '+91-87654-32109',
  'Innovate Solutions',
  'Custom Web Application',
  '₹1,00,000 - ₹5,00,000',
  '3-4 months',
  'Looking for a custom web application to manage our inventory and customer relationships.'
)
on conflict (id) do nothing;
