const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connection = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/ApiResMusic');
        console.log("Se ha conectado correctamente");
    }catch (err){
        console.log(err);
    }
}
module.exports = connection