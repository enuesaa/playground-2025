const { app } = require("@azure/functions");

app.http("hello", {
  methods: ["GET"],
  authLevel: 'anonymous',
  handler: async () => {
    return {
      jsonBody: { ok: true, message: "hello" }
    };
  }
});
