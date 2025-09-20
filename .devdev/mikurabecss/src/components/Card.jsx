import { forwardRef } from 'react'

const Card = forwardRef(({ width, height, backgroundColor, borderColor, borderWidth }, ref) => {
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: '#333',
    fontFamily: 'system-ui, sans-serif'
  }

  return (
    <div ref={ref} style={cardStyle}>
      Sample Card
    </div>
  )
})

Card.displayName = 'Card'

export default Card