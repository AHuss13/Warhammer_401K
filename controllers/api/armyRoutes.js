const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    res.status(200).json("HELLO WORLD!!!!!!!!!!!!!!!");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/soldier', async (req, res) => {
    try {
      res.status(200).json("going to database... got your army... here it is: ____");
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/mini', async (req, res) => {
    try {
    // validate that req.body has the correct properities -> i.e. if name is "" or undefined, throw an exception
      res.status(200).json(`creating your mini named ${req.body.name}... done`);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/deletetabi', async (req, res) => {
try {
    res.status(200).json("DELETED TABI LOL!!!!!!!!!!!!!!!");
} catch (err) {
    res.status(400).json(err);
}
});

  module.exports = router;