/**
 * If the user is logged in, logs himm out then redirects to /
 */

module.exports = function (objectRepository) {

    return function (req, res, next) {
        res.redirect('/');
        return next();
    };

};