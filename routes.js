module.exports = (app) => {
    
    app.get('/test', app.api.User.Signup);
    // app.get('/test', (req, res, next) => {
    //     let t = {
    //         fullName: 'bill'
    //     }
    //     console.log('1', app)
    //     let newuser = new app.db.model.User(t);
    //     newuser.save(function (err, data) {
    //         if (err) {
    //             console.log('err', err);
    //             res.sendStatus(400);
    //         }
    //         {
    //             console.log('data', data);
    //         res.sendStatus(200);
    //         }
            
    //     })
        
    // })
}