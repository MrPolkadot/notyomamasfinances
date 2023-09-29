const router = require("express").Router();
const { Bills, Expenses, Income, User } = require("../models")
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
    try{
        const userData = await User.findByPk(req.session.user_id, {
            exclude: [
                {
                    attributes: ['password']
                }
            ],
            include: [
                {
                    model: Bills,
                    attributes: ['amount','bill_name']
                },
            ],
        });

        const user = userData.get({plain:true})
        console.log(user);
        //const totalAmount = userData.Bills.reduce((total, bill) => total + bill.amount, 0);
        res.render('profile', {user, logged_in: true});
    } catch (err) {
        res.status(500).json(err);
    }
     
});

router.get('/bills', async (req, res) => {
    res.render('bills')
  })

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;