var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');
var helmet = require('helmet');


app.use('/static', express.static('static'));

app.use(session({
    secret: 'Chuck Norris does not sleep, he waits.',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());


/**
 * Create the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.error = [];
    res.tpl = {};
    return next();
});


/**
 * Include routing
 */

//require('./routes/general')(app);       //syntax: condensed version of
                                        //var general = require('./routes/general');
                                        //general(app);
// require('./routes/manager')(app);
//require('./routes/doctor')(app);
// require('./routes/patient')(app);


app.use(express.static('static'));
app.use(express.static('views'));

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('General error occurred!');

    //Flush out the stack to the console
    console.error(err.stack);
});

/**
 * Start the server
*/
var server = app.listen(3000, function () {
    console.log("Server started on port 3000")
});
