var renderMW = require('../middleware/general/renderMW');
var inverseAuthMW = require('../middleware/general/inverseAuthMW');

var doctorCheckLoginMW = require('../middleware/doctor/doctorCheckLoginMW');
var doctorDismissAppointmentMW = require('../middleware/doctor/doctorDismissAppointmentMW');
var doctorEditDoctorMW = require('../middleware/doctor/doctorEditDoctorMW');
var doctorEditMedchartMW = require('../middleware/doctor/doctorEditMedchartMW');
var doctorFindPatientMW = require('../middleware/doctor/doctorFindPatientMW');
var doctorListAppointmentsMW = require('../middleware/doctor/doctorListAppointmentsMW');
var doctorFixAppointmentMW = require('../middleware/doctor/doctorFixAppointmentMW');
var doctorViewMedchartMW = require('../middleware/doctor/doctorViewMedchartMW');


var doctorModel = require('../models/Doctor');
var patientModel = require('../models/Patient');
var appointmentModel = require('../models/Appointment');
var medchartModel = require('../models/Medchart');


module.exports = function(app)
{

     var objectRepository = {
         doctorModel : doctorModel,
         patientModel : patientModel,
         appointmentModel : appointmentModel,
         medchartModel : medchartModel
     };

    app.get('/login_doctor',
        inverseAuthMW(objectRepository),
        renderMW(objectRepository, 'login_doctor.html')
    );

    app.post('/login_doctor',
        doctorCheckLoginMW(objectRepository),
        renderMW(objectRepository, 'index_doctor.html')
    );

    app.use('/index_doctor',
        inverseAuthMW(objectRepository),
        doctorFindPatientMW(objectRepository),
        renderMW(objectRepository, 'index_doctor.html')
    );

    app.get('/index_doctor/view/:medchart',
        doctorAuthMW(objectRepository),
        doctorViewMedchartMW(objectRepository),
        renderMW(objectRepository, 'newmedchart_doctor.html')
    );

    app.use('/index_doctor/add/:medchart',
        doctorAuthMW(objectRepository),
        doctorEditMedchartMW(objectRepository),
        renderMW(objectRepository, 'newmedchart_doctor.html')
    );

    app.use('/booking_doctor',
        doctorAuthMW(objectRepository),
        doctorListAppointmentsMW(objectRepository),
        renderMW(objectRepository,'booking_doctor.html')
    );

    app.use('/booking_doctor/fix/:id',
        doctorAuthMW(objectRepository),
        doctorFixAppointmentMW(objectRepository),
        doctorListAppointmentsMW(objectRepository),
        renderMW(objectRepository,'booking_doctor.html')
    );

    app.use('/booking_doctor/dismiss/:id',
        doctorAuthMW(objectRepository),
        doctorDismissAppointmentMW(objectRepository),
        doctorListAppointmentsMW(objectRepository),
        renderMW(objectRepository,'booking_doctor.html')
    );

    app.use('/editdoc_doctor',
        doctorAuthMW(objectRepository),
        doctorEditDoctorMW(objectRepository),
        renderMW(objectRepository,'index_doctor.html')
    );

    app.use('/newmedchart_doctor',
        doctorAuthMW(objectRepository),
        doctorEditMedchartMW(objectRepository),
        renderMW(objectRepository,'index_doctor.html')
    );
};