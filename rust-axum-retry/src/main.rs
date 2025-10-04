use axum::{
    routing::{get, post},
    Router,
};
use tower_http::cors::{CorsLayer, Any};
mod handlers;

use handlers::top::handle_top;
use handlers::post::handle_post;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(handle_top))
        .route("/echo", post(handle_post))
        .layer(CorsLayer::new().allow_origin(Any).allow_methods(Any));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();

    axum::serve(listener, app)
        .await
        .unwrap();
}
