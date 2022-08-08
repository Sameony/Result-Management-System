const Sequelize = require('sequelize');

const sequelize = new Sequelize("resultManagement","docker","SamSakIB2001&@&",{
    dialect: "mysql",
    host: "azuredatabasefor1.mysql.database.azure.com"
});

module.exports = sequelize;
