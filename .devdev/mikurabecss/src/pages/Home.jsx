import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import html2canvas from 'html2canvas'
import Card from '../components/Card'
import ControlPanel from '../components/ControlPanel'

const Home = () => {
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(200)
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [borderColor, setBorderColor] = useState('#cccccc')
  const [borderWidth, setBorderWidth] = useState(2)
  
  const cardRef = useRef(null)

  const handleExportPNG = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: null,
          scale: 2
        })
        
        const link = document.createElement('a')
        link.download = 'card.png'
        link.href = canvas.toDataURL()
        link.click()
      } catch (error) {
        console.error('Error exporting PNG:', error)
        alert('PNG export failed. Please try again.')
      }
    }
  }

  const handleCopyHTML = () => {
    const htmlCode = `<div style="
  width: ${width}px;
  height: ${height}px;
  background-color: ${backgroundColor};
  border: ${borderWidth}px solid ${borderColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
  font-family: system-ui, sans-serif;
">
  Sample Card
</div>`

    navigator.clipboard.writeText(htmlCode).then(() => {
      alert('HTML code copied to clipboard!')
    }).catch(() => {
      alert('Failed to copy HTML code to clipboard.')
    })
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Link
          to="/mikurabe"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          CSS 見比べツールへ
        </Link>
      </div>

      <div style={{
        display: 'flex',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
        alignItems: 'flex-start'
      }}>
      <ControlPanel
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderWidth={borderWidth}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
        onBackgroundColorChange={setBackgroundColor}
        onBorderColorChange={setBorderColor}
        onBorderWidthChange={setBorderWidth}
        onExportPNG={handleExportPNG}
        onCopyHTML={handleCopyHTML}
      />
      
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <Card
          ref={cardRef}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          borderWidth={borderWidth}
        />
      </div>
    </div>
  </div>
  )
}

export default Home