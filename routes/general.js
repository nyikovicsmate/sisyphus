/**
 * General routing for paths, which are not tied strongly to either entity
 */

var renderMW = require('../middleware/general/renderMW');
var indexRedirectMW = require('../middleware/general/inverseAuthMW');


//TODO: include models when db is present
// var model = require();


module.exports = function(app)
{

    var objectRepository = {};

    app.get('/',
        indexRedirectMW(objectRepository),
        renderMW(objectRepository, 'index.html')
    );

    app.get('/support',
        renderMW(objectRepository, 'support.html')
    );

    app.get('/prices',
        renderMW(objectRepository, 'prices.html')
    );

};