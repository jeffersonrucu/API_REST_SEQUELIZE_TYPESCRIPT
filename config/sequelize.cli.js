require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    url: process.env.DATABASE_URL
}