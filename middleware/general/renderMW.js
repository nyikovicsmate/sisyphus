/**
 * Renders the view
 */


module.exports = function (objectRepository, view) {

    return function (req, res) {
        return res.sendFile(view, { root:'views' }, function (err) {
            if(err){
                console.log('Could not send: ' + view);
                console.log(err.status);
                res.end();
            }
            else{
                console.log('Sent: ' + view);
                res.end();
            }
        })
    }
}