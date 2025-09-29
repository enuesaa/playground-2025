use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveIden)]
enum Executions {
    Table,
    Id,
    Command,
    Stdout,
    Stderr,
    Code,
    Duration,
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
                    .table(Executions::Table)
                    .if_not_exists()
                    .col(ColumnDef::new(Executions::Id).integer().not_null().auto_increment().primary_key())
                    .col(ColumnDef::new(Executions::Command).string().not_null())
                    .col(ColumnDef::new(Executions::Stdout).string())
                    .col(ColumnDef::new(Executions::Stderr).string())
                    .col(ColumnDef::new(Executions::Code).integer())
                    .col(ColumnDef::new(Executions::Duration).integer())
                    .col(ColumnDef::new(Executions::CreatedAt).timestamp().not_null().default(Expr::current_timestamp()))
                    .col(ColumnDef::new(Executions::UpdatedAt).timestamp().not_null().default(Expr::current_timestamp()))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Executions::Table).to_owned())
            .await
    }
}
