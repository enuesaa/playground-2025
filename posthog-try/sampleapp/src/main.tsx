import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { PostHogProvider } from 'posthog-js/react'
import posthog from 'posthog-js';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: 'https://us.i.posthog.com',
  defaults: '2025-05-24',
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>
)
