use anyhow::Result;
use sea_orm::QueryOrder;
use sea_orm::entity::prelude::*;
use sea_orm::{ActiveValue::Set, DatabaseConnection};

use crate::models;

pub async fn create(db: &DatabaseConnection) -> Result<()> {
    let pstat = models::pstats::ActiveModel {
        name: Set("hello".to_owned()),
        ..Default::default()
    };
    let res = models::pstats::Entity::insert(pstat).exec(db).await?;
    print!("id{:?}\n", res);
    Ok(())
}

pub async fn find_all(db: &DatabaseConnection) -> Result<()> {
    let pstats: Vec<models::pstats::Model> = models::pstats::Entity::find()
        .order_by_asc(models::pstats::Column::Id)
        .all(db)
        .await?;
    print!("pstats{:?}\n", pstats);

    Ok(())
}
