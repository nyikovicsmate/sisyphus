/**
 * Redirects logged in users to their respective index site
 */

module.exports = function (objectRepository) {

    return function (req, res, next) {

        // if the user is logged in redirect
        if ((typeof req.session.userid !== 'undefined') && (typeof req.session.usertype !== 'undefined')) {
            if (req.session.usertype === 'doctor') {
                return res.redirect('/index_doctor');
            } else if (req.session.usertype === 'manager') {
                return res.redirect('/index_manager');
            } else if (req.session.usertype === 'patient') {
                return res.redirect('/index_patient');
            } else {
                //TODO handle error
                res.redirect('/');
            } 
        } else {
            res.redirect('/');
        }
    };
};
