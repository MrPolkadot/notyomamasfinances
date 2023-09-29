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
            exclude: [
                {
                    attributes: ['password']
                }
            ],
            include: [
                {
                    model: Bills,
                    attributes: ['amount','bill_name',
                        
                        
                            [sequelize.literal(
                                `(SELECT SUM(amount) FROM bills WHERE user_id = ${id})`
                            ),
                            'total']
                           
                            ]  
                },
                {
                    model: Expenses,
                    attributes: ['expense_name','expense_date'
                    // ,
                        
                        
                    //         [sequelize.literal(
                    //             `(SELECT SUM(amount) FROM expenses WHERE user_id = ${id})`
                    //         ),
                    //         'total']
                           
                            ]  
                },
                {
                    model: Income,
                }    
            ]
        });        

        const user = userData.get({plain:true})
        console.log(user);
        res.render('profile', {user, logged_in: true});
    } catch (err) {
        res.status(500).json(err);
    }
     
});

router.get('/bills', async (req, res) => {
    res.render('bills')
});

router.get('/expenses', async (req, res) => {
    res.render('expenses')
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