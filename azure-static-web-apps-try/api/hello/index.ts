import { app, HttpRequest, HttpResponseInit } from '@azure/functions'

app.http('hello', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (_req: HttpRequest): Promise<HttpResponseInit> => {
    return {
      jsonBody: {
        ok: true,
        message: 'hello',
      },
    };
  }
})
