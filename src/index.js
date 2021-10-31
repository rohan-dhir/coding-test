const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const router = require('./routes/routes');

app.use(express.json());
app.use(cors({ origin: true, credentials: true }))

app.get('/', (req, res) => {

    res.send("Sever is Running!");
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});
