const router = require("express").Router();

const { Bills, Expenses, Savings, User } = require("../models")

const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        await res.render('login');
        console.log("rendered")
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;