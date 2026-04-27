
const express = require("express");
const {signin}= require('./controllers/user-controller');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hello bro");
});


router.get('/signin', signin);

module.exports = router;