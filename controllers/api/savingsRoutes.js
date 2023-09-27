const router = require("express").Router();
const { Savings } = require("../../models");
const withAuth = require("../utils/auth");

router.post('/', withAuth, async (req, res) => {
    try {
      const newSavings = await Savings.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newSavings);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const savingsData = await Savings.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!savingsData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(savingsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;