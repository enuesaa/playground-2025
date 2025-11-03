use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "pstats")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub pid: u32,
    pub name: String,
    pub command: String,
    pub cwd: String,
    pub status: String,
    pub parent_pid: u32,
    pub user_id: u32,
    pub cpu_usage: u32,
    pub cpu_time: u32,
    pub memory_usage: u32,
    pub created_at: DateTimeWithTimeZone,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
