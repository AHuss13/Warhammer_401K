const sequelize = require('../config/connection');
//Names changing
const { Army, User, Mini, Wargear } = require('../models');

const userData = require('./userData.json');
const armyData = require('./armyData.json');
const miniData = require('./miniData.json');
const wargearData = require('./wargearData.json');

//*****************
//COPYPASTA'D  FROM  MINI PROJECT
//*******************

async function seedDatabase() {
    try {
        await sequelize.sync({ force: true });

        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        await Army.bulkCreate(armyData);
        await Mini.bulkCreate(miniData);
        await Wargear.bulkCreate(wargearData);

        console.log('Database seeded succesfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }

    process.exit(0);
};

seedDatabase();