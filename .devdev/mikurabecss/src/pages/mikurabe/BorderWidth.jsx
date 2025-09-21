import { Link } from 'react-router-dom'

const borderWidthValues = ['1px', '2px', '4px', '8px', '12px', '16px']

function BorderWidth() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
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

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {borderWidthValues.map(width => (
          <div
            key={width}
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>border-width: {width}</h3>
            <div
              style={{
                border: `${width} solid #333`,
                padding: '20px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              サンプルテキスト
            </div>
            <code style={{
              display: 'block',
              marginTop: '12px',
              padding: '8px',
              backgroundColor: '#f1f3f4',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              border-width: {width};
            </code>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BorderWidth