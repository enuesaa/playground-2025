create schema if not exists public;

create table public.customers (
    id serial primary key,
    name text not null,
    created_at date not null,
    amount numeric
);

insert into public.customers (name, created_at, amount) values
('Alice', '2025-09-01', 100),
('Alice', '2025-09-02', 150),
('Bob', '2025-09-01', 200),
('Bob', '2025-09-02', 180),
('Charlie', '2025-09-01', 50);
