/**
 * Checks if the given doctor credentials match with the ones in the db, if so creates a new session
 */

var requireOption = require('../general/helperMW').requireOption;

module.exports = function (objectRepository) {

    var doctorModel = requireOption(objectrepository, 'doctorModel');

    return function (req, res, next) {

        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.id === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }

        doctorModel.findById(req.body.id, function (err, result) {
            if ((err) || (!result)) {
                res.tpl.error.push('Your identifier is not registered!');
                return next();
            }

            //check password
            if (result.pass !== req.body.password) {
                res.tpl.error.push('Wrong password!');
                return next();
            }

            //login is ok, save id to session
            req.session.userid = result.id;
            req.session.usertype = 'doctor'

            //redirect to / so the app can decide where to go next
            return res.redirect('/');
        })
    };

};

require('./doctorAuthMW').req