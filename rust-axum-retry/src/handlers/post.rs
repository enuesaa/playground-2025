use axum::Json;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct PostRequest {
    text: String,
}

#[derive(Serialize)]
pub struct PostResponse {
    text: String,
}

pub async fn handle_post(Json(payload): Json<PostRequest>) -> Json<PostResponse> {
    Json(PostResponse {
        text: payload.text,
    })
}