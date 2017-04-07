/**
 * Edits a subscriber, if ID is not supplied with the POST, adds it to the db instead of edit
 */

module.exports = function (objectRepository) {

    return function (req, res, next) {
        //TODO: implement if subscriber model is available
        return next();
    };

};