'use strict';

module.exports = function(app) {
    var simplereg = require('./controller');

    app.route('/')
        .get(simplereg.index);

    app.route('/users')
        .get(simplereg.users);

    app.route('/createUser')
        .post(simplereg.createUser);
};