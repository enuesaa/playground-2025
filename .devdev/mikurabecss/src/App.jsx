import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MikurabeCSSHome from './pages/mikurabe'
import BorderWidth from './pages/mikurabe/BorderWidth'
import BorderStyle from './pages/mikurabe/BorderStyle'
import BorderRadius from './pages/mikurabe/BorderRadius'
import Padding from './pages/mikurabe/Padding'
import Margin from './pages/mikurabe/Margin'
import BackgroundColor from './pages/mikurabe/BackgroundColor'
import './App.css'

function App() {
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Card Maker
      </h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mikurabe" element={<MikurabeCSSHome />} />
        <Route path="/mikurabe/border-width" element={<BorderWidth />} />
        <Route path="/mikurabe/border-style" element={<BorderStyle />} />
        <Route path="/mikurabe/border-radius" element={<BorderRadius />} />
        <Route path="/mikurabe/padding" element={<Padding />} />
        <Route path="/mikurabe/margin" element={<Margin />} />
        <Route path="/mikurabe/background-color" element={<BackgroundColor />} />
      </Routes>
    </div>
  )
}

export default App
