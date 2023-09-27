const router = require("express").Router();

const billRoutes = require("./billRoutes");
const expensesRoutes = require("./expensesRoutes");
const savingsRoutes = require("./savingsRoutes");
const userRoutes = require("./userRoutes");

router.use("/bills", billRoutes);
router.use("/expenses", expensesRoutes);
router.use("/savings", savingsRoutes);
router.use("/users", userRoutes);

module.exports = router;
