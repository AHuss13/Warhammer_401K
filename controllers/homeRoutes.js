const router = require('express').Router();
const { User, Army, Mini, Wargear } = require('../models');
const withAuth = require('../utils/auth');

//http://localhost:3001/
router.get('/', async (req, res) => { // browser path
  try {
    //res.status(200).json("HELLO WORLD!!!!!!!!!!!!!!!");
    res.render('homepage', { // This changes the moustache page
      title: 'Homepage' // Tab name
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

//http://localhost:3001/profile
router.get('/profile', async (req, res) => {
  try {
    const armies = await Army.findAll();
    const armyNames = armies.map(army => army.name);
    res.render('profile', { 
      title: 'Profile',
      armyNames: armyNames
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;