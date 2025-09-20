const ControlPanel = ({ 
  width, 
  height, 
  backgroundColor, 
  borderColor, 
  borderWidth, 
  onWidthChange,
  onHeightChange,
  onBackgroundColorChange,
  onBorderColorChange,
  onBorderWidthChange,
  onExportPNG,
  onCopyHTML
}) => {
  return (
    <div style={{
      color: '#111',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      minWidth: '250px'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Card Settings</h3>
      
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
          Width: {width}px
        </label>
        <input
          type="range"
          min="100"
          max="500"
          value={width}
          onChange={(e) => onWidthChange(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
          Height: {height}px
        </label>
        <input
          type="range"
          min="50"
          max="400"
          value={height}
          onChange={(e) => onHeightChange(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
          Background Color
        </label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => onBackgroundColorChange(e.target.value)}
          style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
          Border Color
        </label>
        <input
          type="color"
          value={borderColor}
          onChange={(e) => onBorderColorChange(e.target.value)}
          style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
          Border Width: {borderWidth}px
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={borderWidth}
          onChange={(e) => onBorderWidthChange(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={onExportPNG}
          style={{
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          Export as PNG
        </button>
        <button
          onClick={onCopyHTML}
          style={{
            padding: '12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          Copy HTML Code
        </button>
      </div>
    </div>
  )
}

export default ControlPanel