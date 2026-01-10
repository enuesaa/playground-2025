use sea_orm_migration::prelude::*;

#[derive(DeriveIden)]
enum Pstats {
    Table,
    Id,
    Pid,
    Name,
    Command,
    Cwd,
    Status,
    ParentPid,
    UserId,
    CpuUsage,
    MemoryUsage,
    CpuTime,
    CreatedAt,
    UpdatedAt,
}

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Pstats::Table)
                    .if_not_exists()
                    .col(ColumnDef::new(Pstats::Id).integer().not_null().auto_increment().primary_key())
                    .col(ColumnDef::new(Pstats::Pid).integer().not_null())
                    .col(ColumnDef::new(Pstats::Name).string().not_null())
                    .col(ColumnDef::new(Pstats::Command).string())
                    .col(ColumnDef::new(Pstats::Cwd).string())
                    .col(ColumnDef::new(Pstats::Status).string())
                    .col(ColumnDef::new(Pstats::ParentPid).integer())
                    .col(ColumnDef::new(Pstats::UserId).integer())
                    .col(ColumnDef::new(Pstats::CpuUsage).integer())
                    .col(ColumnDef::new(Pstats::CpuTime).integer())
                    .col(ColumnDef::new(Pstats::MemoryUsage).integer())
                    .col(ColumnDef::new(Pstats::CreatedAt).timestamp().not_null().default(Expr::current_timestamp()))
                    .col(ColumnDef::new(Pstats::UpdatedAt).timestamp().not_null().default(Expr::current_timestamp()))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Pstats::Table).to_owned())
            .await
    }
}
