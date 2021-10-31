const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000
const router = require('./routes/routes')

app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.get('/', (req, res) => {
    res.send("Sever is Running!")
});

app.use('/api', router);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('An error has occured.')
})

//Server set to use port 5000 locally
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`)
});
