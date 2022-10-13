const {Sequelize}= require('sequelize')
module.exports = new Sequelize(
    'postgres',
    'postgres',
    'Lvbnhbq1',
    {
 dialect:'postgres',
 host: 'localhost',
 port: 5433
})