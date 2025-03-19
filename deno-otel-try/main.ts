import { SpanStatusCode, trace } from "npm:@opentelemetry/api@1";

const INDEX_ROUTE = new URLPattern({ pathname: "/" });
const BOOK_ROUTE = new URLPattern({ pathname: "/book/:id" });

Deno.serve(async (req) => {
  const span = trace.getActiveSpan();

  if (INDEX_ROUTE.test(req.url)) {
    span?.setAttribute("http.route", "/");
    span?.updateName(`${req.method} /`);

    const res = await fetch("https://example.com");
    console.log(res.status);

    span?.setStatus({
      code: SpanStatusCode.OK,
      message: "ok",
    });
    span?.setAttribute("a", "aaa");

    return new Response("ok", { status: 200 });
  }
  if (BOOK_ROUTE.test(req.url)) {
    span?.setAttribute("http.route", "/book/:id");
    span?.updateName(`${req.method} /book/:id`);

    span?.setStatus({
      code: SpanStatusCode.ERROR,
      message: "err",
    });

    return new Response("ok", { status: 400 });
  }

  return new Response("Not found", { status: 404 });
});
