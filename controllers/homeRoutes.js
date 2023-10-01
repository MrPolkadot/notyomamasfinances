const router = require("express").Router();
const sequelize = require("../config/connection");
const { Bills, Expenses, Income, User } = require("../models")
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        res.render('homepage',{logged_in: req.session.logged_in});
        console.log("rendered")
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/signup", async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});
// profile page grabs bills data
router.get('/profile', withAuth, async (req, res) => {
    const id = req.session.user_id;
    
    try{
        const userData = await User.findByPk(id, {
            include: [{model:Bills},{model:Expenses},{model:Income}],          
            attributes: {
                include: [               
                    [
                        sequelize.literal(
                            `(SELECT SUM(amount) FROM bills WHERE user_id = ${id})`
                        ),
                        'totalBills'
                        
                    ] //Needs amount added to expenses
                    ,                    
                    [
                        sequelize.literal(
                            `(SELECT SUM(amount) FROM expenses WHERE user_id = ${id})`
                        ),
                        'totalExpenses'
                    ],
                    [
                        sequelize.literal(
                            `(SELECT income_amount FROM income WHERE user_id = ${id})`
                        ),
                        'income'
                    ]
                ]
            },                     
            
        });

        const user = userData.get({plain:true});
        const remaining = (user.income - (Number(user.totalBills) + Number(user.totalExpenses)));
        const budget = (user.income - user.totalBills)
        console.log(user);
        res.render('profile', {user, budget, remaining, logged_in: true});
    } catch (err) {
        res.status(500).json(err);
    }
     
});
//bills route
router.get('/bills', withAuth, async (req, res) => {
    const id = req.session.user_id;
    try{
        const billsData = await User.findByPk(id, {
            include: [{model: Bills}]
        });
        const bills = billsData.get({plain:true});
        console.log(bills);
        res.render('bills', {bills, logged_in: true});
    } catch {
        res.status(500).json(err);
    }
    
});
//expenses route
router.get('/expenses', withAuth, async (req, res) => {
    const id = req.session.user_id;
    try {
        const expenseData = await User.findByPk(id, {
            include: [{model: Expenses}]
        });
        const expense = expenseData.get({plain: true});
        
        res.render('expenses',{expense, logged_in: true});
    } catch {
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
//route for one bill to be displayed if needed
router.get('/bill/:id', withAuth, async (req, res) => {
    try {
        const oneBill = await Bills.findByPk(req.params.id);
        const bill = oneBill.get({ plain: true });
        console.log(bill);
        res.render('oneBill', { bill, logged_in: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }   
});
//route for one expense to be displayed if needed
router.get('/expense/:id', withAuth, async (req, res) => {
    try {
        const oneExpense = await Expenses.findByPk(req.params.id);
        const expense = oneExpense.get({ plain: true });
        console.log(expense);
        res.render('oneExpense', { expense, logged_in: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }   
});

module.exports = router;