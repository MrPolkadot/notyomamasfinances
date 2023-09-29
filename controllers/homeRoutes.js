const router = require("express").Router();
const { Bills, Expenses, Savings, User } = require("../models")
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        await res.render('homepage',{logged_in: req.session.logged_in});
        console.log("rendered")
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/signup", async (req, res) => {
    try {
        await res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});


// Use withAuth middleware to prevent access to route
// removed withAuth
router.get('/profile', withAuth, async (req, res) => {
    
    res.render('profile',{logged_in: req.session.logged_in} );
     
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;