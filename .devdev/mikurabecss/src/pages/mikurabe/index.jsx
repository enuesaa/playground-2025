import { useState } from 'react'
import { Link } from 'react-router-dom'

const cssProperties = [
  {
    name: 'border-width',
    path: '/mikurabe/border-width',
    values: ['1px', '2px', '4px', '8px']
  },
  {
    name: 'border-style',
    path: '/mikurabe/border-style',
    values: ['none', 'solid', 'dotted', 'dashed', 'inset', 'outset']
  },
  {
    name: 'border-radius',
    path: '/mikurabe/border-radius',
    values: ['0px', '4px', '8px', '16px', '50%']
  },
  {
    name: 'padding',
    path: '/mikurabe/padding',
    values: ['0px', '8px', '16px', '24px', '32px']
  },
  {
    name: 'margin',
    path: '/mikurabe/margin',
    values: ['0px', '8px', '16px', '24px', '32px']
  },
  {
    name: 'background-color',
    path: '/mikurabe/background-color',
    values: ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#333333']
  }
]

function MikurabeCSSHome() {
  const [selectedProperties, setSelectedProperties] = useState({})

  const handlePropertySelect = (propertyName, value) => {
    setSelectedProperties(prev => ({
      ...prev,
      [propertyName]: value
    }))
  }

  const generateCSS = () => {
    return Object.entries(selectedProperties)
      .map(([prop, value]) => `${prop}: ${value}`)
      .join(';\n  ')
  }

  const generateHTML = () => {
    const css = generateCSS()
    return `<div style="${css.replace(/\n  /g, ' ')}">\n  カード内容\n</div>`
  }

  const copyHTML = () => {
    navigator.clipboard.writeText(generateHTML())
    alert('HTMLコードをコピーしました')
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', 'color': '#1a1a1a' }}>
      <h2>CSS 見比べツール</h2>

      <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
        {cssProperties.map(property => (
          <div key={property.name} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white'
          }}>
            <h3>{property.name}</h3>
            <Link
              to={property.path}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                marginBottom: '12px'
              }}
            >
              値を見比べる
            </Link>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {property.values.map(value => (
                <button
                  key={value}
                  onClick={() => handlePropertySelect(property.name, value)}
                  style={{
                    padding: '6px 12px',
                    border: selectedProperties[property.name] === value ? '2px solid #007bff' : '1px solid #ccc',
                    backgroundColor: selectedProperties[property.name] === value ? '#e7f3ff' : 'white',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {Object.keys(selectedProperties).length > 0 && (
        <div style={{
          border: '2px solid #007bff',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: 'white'
        }}>
          <h3>プレビュー</h3>
          <div
            style={{
              ...Object.fromEntries(
                Object.entries(selectedProperties).map(([prop, value]) => [
                  prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
                  value
                ])
              ),
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}
          >
            カード内容
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h4>CSS</h4>
            <pre style={{
              backgroundColor: '#f8f9fa',
              padding: '12px',
              borderRadius: '4px',
              fontSize: '14px',
              overflow: 'auto'
            }}>
              {generateCSS()}
            </pre>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={copyHTML}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              HTMLコピー
            </button>
            <button
              onClick={() => alert('PNG エクスポートは実装中です')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffc107',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              PNG エクスポート
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MikurabeCSSHome