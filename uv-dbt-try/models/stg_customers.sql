{{ config(materialized='view') }}

select
    id,
    name,
    created_at,
    amount
from public.customers
