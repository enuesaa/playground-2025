import { Link } from 'react-router-dom'

const marginValues = ['0px', '4px', '8px', '16px', '24px', '32px', '48px', '64px']

function Margin() {
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

      <h2>margin の見比べ</h2>
      <p>異なるmarginの値を比較できます。</p>

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {marginValues.map(margin => (
          <div
            key={margin}
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>margin: {margin}</h3>
            <div
              style={{
                backgroundColor: '#e3f2fd',
                padding: '20px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  margin: margin,
                  padding: '16px',
                  backgroundColor: '#f8f9fa',
                  border: '2px solid #333',
                  display: 'inline-block'
                }}
              >
                サンプルテキスト
              </div>
            </div>
            <code style={{
              display: 'block',
              marginTop: '12px',
              padding: '8px',
              backgroundColor: '#f1f3f4',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              margin: {margin};
            </code>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Margin