import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import TopPage from './pages/index'
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';

export const App = () => {
  const queryClient = new QueryClient()

  const { client } = useClientAsyncInit(
    "client-wk9Qf4xXbXJRzXv25xTJg6a4BNWqCW89ggaCytAGPfw",
    { userID: 'a-user' }, 
    { plugins: [ new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin() ] },
  );

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Theme appearance='dark' accentColor='purple'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TopPage />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </QueryClientProvider>
    </StatsigProvider>
  )
}
