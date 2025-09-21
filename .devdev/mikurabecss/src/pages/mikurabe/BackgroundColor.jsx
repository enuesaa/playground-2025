import { Link } from 'react-router-dom'

const backgroundColorValues = [
  { value: '#ffffff', name: 'White' },
  { value: '#f8f9fa', name: 'Light Gray' },
  { value: '#e9ecef', name: 'Gray' },
  { value: '#dee2e6', name: 'Medium Gray' },
  { value: '#6c757d', name: 'Dark Gray' },
  { value: '#495057', name: 'Darker Gray' },
  { value: '#343a40', name: 'Very Dark Gray' },
  { value: '#212529', name: 'Black' },
  { value: '#007bff', name: 'Blue' },
  { value: '#28a745', name: 'Green' },
  { value: '#dc3545', name: 'Red' },
  { value: '#ffc107', name: 'Yellow' }
]

function BackgroundColor() {
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

      <h2>background-color の見比べ</h2>
      <p>異なるbackground-colorの値を比較できます。</p>

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {backgroundColorValues.map(color => (
          <div
            key={color.value}
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>background-color: {color.value} ({color.name})</h3>
            <div
              style={{
                backgroundColor: color.value,
                border: '2px solid #333',
                padding: '20px',
                textAlign: 'center',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: ['#ffffff', '#f8f9fa', '#e9ecef', '#dee2e6', '#ffc107'].includes(color.value) ? '#000' : '#fff'
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
              background-color: {color.value};
            </code>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BackgroundColor