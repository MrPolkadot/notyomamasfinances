const router = require("express").Router();
const { Bills } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
    const newBills = await Bills.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBills);
  } catch (err) {
    res.status(400).json(err);
  }
});
  
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const billsData = await Bills.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!billsData) {
      res.status(404).json({ message: 'No bill found with this id!' });
      return;
    }

    res.status(200).json(billsData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
