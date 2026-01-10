use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "pstats")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub pid: u32,
    pub name: String,
    pub command: Option<String>,
    pub cwd: Option<String>,
    pub status: Option<String>,
    pub parent_pid: Option<u32>,
    pub user_id: Option<u32>,
    pub cpu_usage: Option<u32>,
    pub cpu_time: Option<u32>,
    pub memory_usage: Option<u32>,
    pub created_at: DateTimeWithTimeZone,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
