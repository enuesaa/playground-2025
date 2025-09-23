use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveIden)]
enum Cakes {
    Table,
    Id,
    Title,
}

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Cakes::Table)
                    .if_not_exists()
                    .col(pk_auto(Cakes::Id))
                    .col(string(Cakes::Title))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Cakes::Table).to_owned())
            .await
    }
}
