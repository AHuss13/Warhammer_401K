const router = require('express').Router();
const { User, Army, Mini, Wargear } = require('../models');
const withAuth = require('../utils/auth');
const seedDatabase = require('../seeds/seed');

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

router.post('/seed', async (req, res) => {
  try {
      await seedDatabase();
      res.status(200).send('Database seeded successfully.');
  } catch (error) {
      console.error('Error seeding database:', error);
      res.status(500).send('Internal Server Error');
  }
});


module.exports = router;