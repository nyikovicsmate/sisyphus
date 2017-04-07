/**
 * Searches for patients
 */

var requireOption = require('../general/helperMW').requireOption;

module.exports = function (objectRepository) {

    var patientModel = requireOption(objectRepository,'patientModel')

    return function (req, res, next) {

        // not enough parameter
        if((typeof req.body === 'undefined') || (typeof req.body.findPatientId === 'undefined')){
            return next();
        }

        patientModel.findById(req.body.findPatientId, function (err, result){
            if((err) || (!result)){
                res.tpl.error.push('Cannot find patient with the given id!');
                return next();
            }

            //TODO: ez igy eléggé szar
            //patient is found
            req.session.findPatientId = result;
        });


        return next();
    };

};