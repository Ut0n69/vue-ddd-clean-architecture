const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 3000

const server = app.listen(port, () => {
  console.log(`API server is listening on http://localhost:${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((_: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

let memberData = require('./memberData')

app.get('/', (_: any, res: any) => {
  res.json(memberData)
})

app.post('/', (req: any, res: any) => {
  if (req.body.name && req.body.age && String(req.body.age).match(/^[0-9]+$/)) {
    memberData.list.push(req.body)
    res.json({ success: true })
  } else {
    res.json({ success: false })
  }
})
