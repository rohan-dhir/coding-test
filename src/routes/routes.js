const express = require('express');
const router = express.Router();
const { sharksList, catsList } = require('../data/dataList.js');

//Randomize array of both lists
const shuffle = (dataArr) => {
    return dataArr.sort(() => Math.random() -0.5);
}

router.get('/getAll', (req, res) => {
    const result =[...catsList, ...sharksList]
    res.status(200).send(shuffle(result));
});

router.get('/cats', (req, res) => {
    res.status(200).send(catsList);
});

router.get('/sharks', (req, res) => {
    res.status(200).send(sharksList);
});

module.exports = router;