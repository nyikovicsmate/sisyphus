require('./Patient');
require('./Doctor');
require('./Medchart');

/**
 * Appointment model (mock)
 * @constructor
 */
var Appointment = function () {
};

/**
 * Mock instance
 * @type {{id: number, date: Date, status: string, patientID: number, doctorID: number, medchartID: number}}
 */
var MockAppointment = {
    id: 1,
    date: new Date(),
    status: 'fix',
    patientID: 1,
    doctorID: 1,
    medchartID: 1
};

/**
 * @param criteria - Appointment PK
 * @param cb error first callback
 * @returns {*}
 */
Appointment.prototype.findById = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, MockAppointment);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Appointment.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [MockAppointment, MockAppointment, MockAppointment]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
User.prototype.save = function (cb) {
    return cb(null, this);
};

module.exports = Appointment;