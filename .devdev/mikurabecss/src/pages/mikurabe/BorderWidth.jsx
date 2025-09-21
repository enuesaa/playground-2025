import { useState } from 'react'
import { Link } from 'react-router-dom'

const borderWidthValues = ['1px', '2px', '4px', '8px', '12px', '16px']

function BorderWidth() {
  const [selectedWidth, setSelectedWidth] = useState('2px')

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', color: '#333' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/mikurabe"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '16px'
          }}
        >
          ← 戻る
        </Link>
      </div>

      <h2>border-width の見比べ</h2>
      <p>異なるborder-widthの値を比較できます。</p>

      <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
        {/* 左側：値の選択 */}
        <div style={{ flex: 1 }}>
          <h3>値を選択</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {borderWidthValues.map(width => (
              <button
                key={width}
                onClick={() => setSelectedWidth(width)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '16px',
                  backgroundColor: selectedWidth === width ? '#e3f2fd' : 'white',
                  border: selectedWidth === width ? '2px solid #2196f3' : '1px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textAlign: 'left',
                  color: '#333'
                }}
              >
                {/* プレビュー部分 */}
                <div
                  style={{
                    width: '80px',
                    height: '40px',
                    border: `${width} solid #333`,
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    flexShrink: 0
                  }}
                />
                {/* ラベル */}
                <span>border-width: {width}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 右側：カード */}
        <div style={{ flex: 1 }}>
          <h3>プレビューカード</h3>
          <div
            style={{
              padding: '40px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              border: `${selectedWidth} solid #333`,
              textAlign: 'center',
              minHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              color: '#333'
            }}
          >
            サンプルカード
            <br />
            <small style={{ color: '#666', fontSize: '14px', marginTop: '8px', display: 'block' }}>
              border-width: {selectedWidth}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BorderWidth