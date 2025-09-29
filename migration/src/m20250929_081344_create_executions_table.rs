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
                    .col(pk_auto(Executions::Id))
                    .col(string(Executions::Command).not_null())
                    .col(string(Executions::Stdout))
                    .col(string(Executions::Stderr))
                    .col(string(Executions::Code))
                    .col(integer(Executions::Duration))
                    .col(timestamp_with_time_zone(Executions::CreatedAt).not_null())
                    .col(timestamp_with_time_zone(Executions::UpdatedAt).not_null())
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
