const express = require('express');
const router = express.Router();


router.get("/basic", (req, res, next) => {
    res.render("maps/basic");
});

module.exports = router;
