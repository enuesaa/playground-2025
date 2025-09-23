use sea_orm::Database;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;

    Ok(())
}
