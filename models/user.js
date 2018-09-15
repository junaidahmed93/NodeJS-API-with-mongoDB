module.exports = function(app, mongoose){
    
    const userSchema = new mongoose.Schema({
        fullName: { type: String, required: true },
    })

    app.db.model('User', userSchema);
}

