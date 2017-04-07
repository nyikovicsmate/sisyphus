require('./Patient');
require('./Doctor');
require('./Medchart');

/**
 * Patient model (mock)
 * @constructor
 */
var Patient = function () {
};

/**
 * Mock instance
 * @type {{id: number, phone: string, appointments: array, medcharts: array}}
 */
var MockPatient = {
    id: 1,
    phone: '+3620234123',
    appointments: [1,2,32],
    medcharts: [1,4]
};

/**
 * @param criteria - Patient PK
 * @param cb error first callback
 * @returns {*}
 */
Patient.prototype.findById = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, MockPatient);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Patient.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [MockPatient, MockPatient, MockPatient]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Patient.prototype.save = function (cb) {
    return cb(null, this);
};

module.exports = Patient;