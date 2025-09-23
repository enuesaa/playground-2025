use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveIden)]
enum Cake {
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
                    .table(Cake::Table)
                    .if_not_exists()
                    .col(pk_auto(Cake::Id))
                    .col(string(Cake::Title))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Cake::Table).to_owned())
            .await
    }
}
