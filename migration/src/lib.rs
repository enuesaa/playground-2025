pub use sea_orm_migration::prelude::*;

mod m20250923_094410_create_cakes_table;
mod m20250929_081344_create_pstats_table;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20250923_094410_create_cakes_table::Migration),
            Box::new(m20250929_081344_create_pstats_table::Migration),
        ]
    }
}
