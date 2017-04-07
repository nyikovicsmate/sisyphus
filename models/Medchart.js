require('./Doctor');

/**
 * Medchart model (mock)
 * @constructor
 */
var Medchart = function () {
};

/**
 * Mock instance
 * @type {{id: number, description: string, treatment: string}}
 */
var MockMedchart = {
    id: 1,
    description:'Nagy hólyag lábon.',
    treatment:'2x3 antibiotikum 2 héten át.'
};

/**
 * @param criteria - Medchart PK
 * @param cb error first callback
 * @returns {*}
 */
Medchart.prototype.findById = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, MockMedchart);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Medchart.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [MockMedchart, MockMedchart, MockMedchart]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Medchart.prototype.save = function (cb) {
    return cb(null, this);
};

module.exports = Medchart;