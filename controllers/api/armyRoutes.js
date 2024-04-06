const router = require('express').Router();

//http://localhost:3001/api/army/
router.get('/', async (req, res) => {
  try {
    //res.status(200).json("HELLO WORLD!!!!!!!!!!!!!!!");
    res.render('homepage', { 
      title: 'Homepage'
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/soldier', async (req, res)
//http://localhost:3001/api/army/army
router.get('/army', async (req, res) => {
    try {
      res.status(200).json(`going to database... got your army... here it is: ${req.body.name}`);
    } catch (err) {
      res.status(400).json(err);
    }
  });
//http://localhost:3001/api/army/mini
  router.get('/mini', async (req, res) => {
    try {
    // validate that req.body has the correct properities -> i.e. if name is "" or undefined, throw an exception
      res.status(200).json(`getting your mini named ${req.body.name}... done`);
    } catch (err) {
      res.status(400).json(err);
    }
  });
//http://localhost:3001/api/army/wargear
  router.get('/wargear', async (req, res) => {
    try {
      res.status(200).json(`going to database... got your army... here it is: ${req.body.name}`);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// router.delete('/deletetapi', async (req, res) => {
// try {
//     res.status(200).json("DELETED TABI LOL!!!!!!!!!!!!!!!");
// } catch (err) {
//     res.status(400).json(err);
// }
// });

  module.exports = router;