const router = require('express').Router();
const { User, Army, Mini, Wargear } = require('../models');
const withAuth = require('../utils/auth');

router.get('/home', async (req, res) => {
  try {
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
    res.render('homepage', { 
      title: 'Homepage'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});