import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'split',
      target: './resources/ui/openapi.ts',
      schemas: './resources/ui/models',
      client: 'vue-query',
      httpClient: 'fetch',
      prettier: true,
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: 'limit',
        },
      }
    },
    input: {
      target: './resources/ui/openapi.yml',
    },
  },
})
