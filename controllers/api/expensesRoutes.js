const router = require("express").Router();
const { Expenses } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
    const newExpense = await Expenses.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newExpense);
  } catch (err) {
    res.status(400).json(err);
  }
});
  
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const expensesData = await Expenses.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!expensesData) {
      res.status(404).json({ message: 'No expense found with this id!' });
      return;
    }

    res.status(200).json(expensesData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;