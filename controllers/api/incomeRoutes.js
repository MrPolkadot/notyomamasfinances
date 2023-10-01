const router = require("express").Router();
const { Income } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
    const newIncome = await Income.create({
      ...req.body,
      user_id: req.session.user_id,
    });
  
    res.status(200).json(newIncome);
  } catch (err) {
    res.status(400).json(err);
  }
});
//update amount
router.put('/', withAuth, async (req, res) => {
  try {
    const newIncome = await Income.update(req.body,{
      
      where: {
        
        user_id: req.session.user_id,
      },
    });
  
    res.status(200).json(newIncome);
  } catch (err) {
    res.status(400).json(err);
  }
})
  
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  
    if (!incomeData) {
      res.status(404).json({ message: 'No income found with this id!' });
      return;
    }
  
    res.status(200).json(incomeData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;