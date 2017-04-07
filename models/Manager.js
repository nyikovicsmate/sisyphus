require('./Doctor');
require('./Medchart');

/**
 * Manager model (mock)
 * @constructor
 */
var Manager = function () {
};

/**
 * Mock instance
 * @type {{id: number, pass: string, name: string}}
 */
var MockManager = {
    id: 1,
    pass: 'password',
    name: 'Manager Márk'
};

/**
 * @param criteria - Manager PK
 * @param cb error first callback
 * @returns {*}
 */
Manager.prototype.findById = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, MockManager);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Manager.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [MockManager, MockManager, MockManager]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Manager.prototype.save = function (cb) {
    return cb(null, this);
};

module.exports = Manager;