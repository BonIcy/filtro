let mongoose = require('mongoose');

let dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('conectado a db');
    } catch (error) {
        console.log(error);
        throw new Error('no se pudo conectar a db');
    }
}

module.exports = {
    dbConnection
}