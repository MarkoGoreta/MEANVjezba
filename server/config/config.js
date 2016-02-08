var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/testiranje',
        rootPath: rootPath,
        port: process.env.PORT || 3000
    },

    production: {
        rootPath: rootPath,
        db: 'mongodb://marko:testiranje@ds045604.mongolab.com:45604/bazatest',
        port: process.env.PORT || 80
    }


};