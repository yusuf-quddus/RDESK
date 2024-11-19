const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(bodyparser.json())

app.post("/api/request", (req, res) => {
    const {name, email, subject, service, compliance, it_service, message} = req.body
    
    res.json({})
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})