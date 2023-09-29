const router = require("express").Router();

const billRoutes = require("./billRoutes");
const expensesRoutes = require("./expensesRoutes");
const savingsRoutes = require("./incomeRoutes");
const userRoutes = require("./userRoutes");

router.use("/bills", billRoutes);
router.use("/expenses", expensesRoutes);
router.use("/income", savingsRoutes);
router.use("/users", userRoutes);

module.exports = router;
