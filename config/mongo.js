const mongoose = require("mongoose");
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.set('strictQuery', false);
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) { console.log('***Conexión Correcta***') } 
        else {
            console.log('***Conexión Incorrecta***')
        }
    });
}
module.exports = dbConnect