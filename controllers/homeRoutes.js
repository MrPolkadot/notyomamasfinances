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
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
                {
                  model: Bills,
                  attributes: ['bill_name', 'due_date', 'amount'],
                },
                {
                  model: Expenses,
                  attributes: ['expense_name', 'expense_date'],
                },
                {
                  model: Savings,
                  attributes: ['savings_name', 'savings_amount', 'savings_date'],
                },
              ],
        });
        
        const user = userData.get({ plain: true });
        console.log(user);
        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in});
        
    } catch (err) {
        res.status(500).json(err);
    }
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