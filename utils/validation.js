module.exports = (app) => {
    app.validationMethods = {}
    
    app.validationMethods.validateEmail = function (userEmail) {
        if (userEmail) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(userEmail);
        } else {
            return false;
        }
    };
}