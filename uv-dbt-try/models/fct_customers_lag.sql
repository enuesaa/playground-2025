{{ config(materialized='table') }}

select
    id,
    name,
    created_at,
    amount,
    lag(amount) over (partition by name order by created_at) as prev_amount
from {{ ref('stg_customers') }}
