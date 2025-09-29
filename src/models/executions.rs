use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "executions")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub command: String,
    pub stdout: String,
    pub stderr: String,
    pub code: u32,
    pub duration: u32,
    pub created_at: DateTimeWithTimeZone, // treated at started_at
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
