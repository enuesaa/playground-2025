import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import TopPage from './pages/index'
import { useEffect } from "react";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { growthbook } from './track'

export const App = () => {
  const queryClient = new QueryClient()

  useEffect(() => {
    growthbook.init({ streaming: true });
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <QueryClientProvider client={queryClient}>
        <Theme appearance='dark' accentColor='purple'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TopPage />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </QueryClientProvider>
    </GrowthBookProvider>
  )
}
