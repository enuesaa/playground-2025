import app/router
import gleam/erlang/process
import mist
import wisp
import wisp/wisp_mist

// see https://github.com/gleam-wisp/wisp/blob/main/examples/src/hello_world/app.gleam
pub fn main() -> Nil {
  wisp.configure_logger()
  let secret_key_base = wisp.random_string(64)
  let assert Ok(_) =
    router.handle_request
    |> wisp_mist.handler(secret_key_base)
    |> mist.new
    |> mist.port(8000)
    |> mist.start

  process.sleep_forever()
}
