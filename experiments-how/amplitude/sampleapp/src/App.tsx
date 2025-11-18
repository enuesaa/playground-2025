import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import TopPage from './pages/index'
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { useEffect } from 'react'

export const App = () => {
  const queryClient = new QueryClient()

  useEffect(() => {
    if (typeof window != 'undefined') {
      amplitude.add(sessionReplayPlugin());
      amplitude.init('3689437d90023b26bca4bcaeccfb746b', {"autocapture":{"attribution":true,"fileDownloads":true,"formInteractions":true,"pageViews":true,"sessions":true,"elementInteractions":true,"networkTracking":true,"webVitals":true,"frustrationInteractions":true}});
    }
  })

  return (
      <QueryClientProvider client={queryClient}>
        <Theme appearance='dark' accentColor='purple'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TopPage />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </QueryClientProvider>
  )
}
