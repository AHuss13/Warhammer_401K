const router = require('express').Router();
const { Army , Mini , User} =require('../../models');
const withAuth = require('../../utils/auth');

http://localhost:3001/api/army/newarmy
router.post('/newarmy', withAuth, async (req, res) => {
  try {
    const newArmy = await Army.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArmy);
  } catch (err) {
    res.status(400).json(err);
  }
});


// HELP Not sure about this
router.get('/newarmy/:id', async (req, res) => {
  try {
    const armies = await Army.findByPk(req.params.id)
    const army = armies.get({plain: true});
    // const armyNames = armies.map(army => army.name);
    //const minis = await Mini.findAll();
    //const miniNames = minis.map(mini => mini.name);
    console.log(army)
    const userData = await User.findOne({
      where: {id: req.session.user_id},
      include: Army,
      //plain: true
      //include: Mini,
            
    }
    );
      //console.log(userData);
    const userPlain = userData.get({plain: true});
    // console.log(userPlain)
    res.render('army', {
      title: 'Army',
      // armyNames: armyNames,
      armies: armies,
      userData: userPlain,
      army: army
      //miniNames: miniNames,
      //minis: minis,
      //user: userData
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// HELP Not sure about this
http://localhost:3001/api/army/:id
router.delete('/newarmy/:id', withAuth, async (req, res) => {
  try {
    const armyData = await Army.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!armyData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(armyData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//http://localhost:3001/api/army/
router.get('/', async (req, res) => {
  try {
    res.status(200).json("HELLO WORLD!!!!!!!!!!!!!!!");
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


  module.exports = router;