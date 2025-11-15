import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import TopPage from './pages/index'
import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: 'http://localhost:4242/api/frontend/',
  clientKey: 'default:development.unleash-insecure-frontend-api-token', // in production use environment variable
  appName: 'unleash-onboarding-react',
};

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <FlagProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Theme appearance='dark' accentColor='purple'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TopPage />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </QueryClientProvider>
    </FlagProvider>
  )
}
