use axum::{
    Router,
    routing::{get, post},
};
use tower_http::cors::{Any, CorsLayer};
mod handlers;

use handlers::post::handle_post;
use handlers::top::handle_top;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(handle_top))
        .route("/echo", post(handle_post))
        .layer(CorsLayer::new().allow_origin(Any).allow_methods(Any));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();

    axum::serve(listener, app).await.unwrap();
}
