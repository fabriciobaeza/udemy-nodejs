const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'fightclub75', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;