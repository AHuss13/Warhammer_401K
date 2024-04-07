const router = require('express').Router();
const { User, Army, Mini, Wargear } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
    // Get all armys and JOIN with user data
    // const armyData = await Army.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });
    
    // Serialize data so the template can read it
    // const armys = armyData.map((army) => army.get({ plain: true }));

    // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       homepage, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//http://localhost:3001/
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


//http://localhost:3001/login
router.get('/login/', async (req, res) => {
  try {
    //res.status(200).json("HELLO WORLD!!!!!!!!!!!!!!!");
    res.render('login', { 
      title: 'Login'
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;