import express from 'express'

const app = express()

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  let count = 0
  const interval = setInterval(() => {
    count++
    res.write(`data: ${JSON.stringify({ time: new Date(), count })}\n\n`)
  }, 1000)

  req.on('close', () => {
    clearInterval(interval)
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
