use anyhow::Result;

use crate::usecases::{cakes, connect, migrate};

pub async fn write() -> Result<()> {
    if let Ok(db) = connect::connect().await {
        let ret = migrate::migrate(&db).await;
        print!("{:?}\n", ret);
        let ret = cakes::create(&db).await;
        print!("{:?}\n", ret);
        let ret = cakes::find_all(&db).await;
        print!("{:?}\n", ret);
    };
    Ok(())
}
