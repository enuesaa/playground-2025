module main

import veb

pub struct Context {
	veb.Context
}

pub struct App {
	veb.StaticHandler
}

@[get]
pub fn (app &App) index(mut ctx Context) veb.Result {
    return ctx.text('hello')
}

fn main() {
	mut app := &App{}
	veb.run[App, Context](mut app, 8080)
}