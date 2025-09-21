import { Link } from 'react-router-dom'

const borderRadiusValues = ['0px', '4px', '8px', '16px', '24px', '32px', '50%', '100px']

function BorderRadius() {
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

      <h2>border-radius の見比べ</h2>
      <p>異なるborder-radiusの値を比較できます。</p>

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {borderRadiusValues.map(radius => (
          <div
            key={radius}
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>border-radius: {radius}</h3>
            <div
              style={{
                border: '2px solid #333',
                borderRadius: radius,
                padding: '20px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '200px',
                height: '100px',
                margin: '0 auto'
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
              border-radius: {radius};
            </code>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BorderRadius