var auth = require('./auth');
var users = require('../controllers/users');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var courses = require('../controllers/courses');

module.exports = function(app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.get('/api/courses', courses.getCourses);

    app.get('/partials/:partialPath', function (req, res) {
        res.render('partials/' + req.params.partialPath);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });

    app.all('/api/*', function (req, res) {
        res.send(404);
    });

    app.get('*', function (req, res) {
        res.render('index',{
           bootstrappedUser: req.user
        });
    });
};