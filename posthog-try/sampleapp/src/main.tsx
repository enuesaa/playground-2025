import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: 'https://us.i.posthog.com',
  defaults: '2025-05-24',
} as const

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
)
