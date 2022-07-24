const Sequelize = require('sequelize');

const sequelize = new Sequelize("resultManagement","docker","SamSakIB2001&@&",{
    dialect: "mysql",
    host: "dynamicnode.mysql.database.azure.com"
});

module.exports = sequelize;