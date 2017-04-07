require('./Medchart');

/**
 * Doctor model (mock)
 * @constructor
 */
var Doctor = function () {
};

/**
 * Mock instance
 * @type {{id: number, pass: string, title: string, name: string, address: string, specializations: array,
 * subscriptionStartDate: Date, subscriptionEndDate: Date, subscriptionTier: number}}
 */
var MockDoctor = {
    id: 1,
    pass: 'password',
    title: 'Prof.',
    name: 'Orvos Olivér',
    address: '1082, Budapest Fő u. 6',
    specializations: ['belgyógyászat', 'neurológia'],
    subscriptionStartDate: new Date(2016,1,1),
    subscriptionEndDate: new Date(2017,1,1),
    subscriptionTier: 1
};

/**
 * @param criteria - Doctor PK
 * @param cb error first callback
 * @returns {*}
 */
Doctor.prototype.findById = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, MockDoctor);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Doctor.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [MockDoctor, MockDoctor, MockDoctor]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Doctor.prototype.save = function (cb) {
    return cb(null, this);
};

module.exports = Doctor;