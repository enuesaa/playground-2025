use anyhow::Result;
use sea_orm::QueryOrder;
use sea_orm::entity::prelude::*;
use sea_orm::{ActiveValue::Set, DatabaseConnection};

use crate::models;

pub async fn create(db: &DatabaseConnection) -> Result<()> {
    let cake = models::cakes::ActiveModel {
        title: Set("hello".to_owned()),
        ..Default::default()
    };
    let res = models::cakes::Entity::insert(cake).exec(db).await?;
    print!("id{:?}\n", res);
    Ok(())
}

pub async fn find_all(db: &DatabaseConnection) -> Result<()> {
    let cakes: Vec<models::cakes::Model> = models::cakes::Entity::find()
        .order_by_asc(models::cakes::Column::Id)
        .all(db)
        .await?;
    print!("cakes{:?}\n", cakes);

    Ok(())
}
