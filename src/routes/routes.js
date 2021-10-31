const express = require('express');
const router = express.Router();
const { sharksList, catsList } = require('../data/dataList.js');

router.get('/cats', (req, res) => {
    res.status(200).send(catsList);
});

router.get('/sharks', (req, res) => {
    res.status(200).send(sharksList);
});

module.exports = router;