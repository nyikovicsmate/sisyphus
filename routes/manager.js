var renderMW = require('../middleware/general/renderMW');
var inverseAuthMW = require('../middleware/general/inverseAuthMW');


var managerModel = require('../models/Manager');
var doctorModel = require('../models/Doctor');


module.exports = function (app) {

    var objectrepository = {
        managerModel : managerModel,
        doctorModel : doctorModel
    };

    app.get('/login_manager',

    );

    app.post('/login_manager',
    );

    app.get('/index_manager',
    );

    app.post('/index_manager',
    );

    app.get('/editdoc_manager',
    );

    app.post('/editdoc_manager',
    );


}
