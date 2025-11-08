use anyhow::Result;
use sea_orm::DatabaseConnection;
use sea_orm::QueryOrder;
use sea_orm::entity::prelude::*;

use crate::models;

pub async fn create(db: &DatabaseConnection, pstat: models::pstats::ActiveModel) -> Result<i32> {
    // let pstat = models::pstats::ActiveModel {
    //     name: Set("hello".to_owned()),
    //     ..Default::default()
    // };
    let res = models::pstats::Entity::insert(pstat).exec(db).await?;
    Ok(res.last_insert_id)
}

pub async fn find_all(db: &DatabaseConnection) -> Result<Vec<models::pstats::Model>> {
    let pstats: Vec<models::pstats::Model> = models::pstats::Entity::find()
        .order_by_asc(models::pstats::Column::Id)
        .all(db)
        .await?;
    Ok(pstats)
}

pub async fn deleteall(db: &DatabaseConnection) -> Result<()> {
    let pstats: Vec<models::pstats::Model> = models::pstats::Entity::find().all(db).await?;

    for pstat in pstats.into_iter() {
        pstat.delete(db).await?;
    }

    Ok(())
}
