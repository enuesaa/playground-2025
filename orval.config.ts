import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'split',
      target: './resources/ui/api/use.ts',
      schemas: './resources/ui/api/models',
      client: 'vue-query',
      httpClient: 'fetch',
      biome: true,
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: './resources/ui/api/client.ts',
          name: 'fetcher',
        }
      },
    },
    input: {
      target: './resources/ui/openapi.yml',
    },
  },
})
