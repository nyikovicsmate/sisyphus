/**
 * If the manager is not logged in, redirects to /
 */

module.exports = function (objectrepository) {


    return function (req, res, next) {

        // if the manager is not logged in
        if ((typeof req.session.userid === 'undefined') ||
                (typeof  req.session.usertype === 'undefined') || 
                (req.session.usertype !== 'manager')) {
            return res.redirect('/');
        }

        return next();
    };
};