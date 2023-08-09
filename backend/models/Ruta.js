let mongoose = require('mongoose');

let rutaSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
    },
  centro: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Centro', 
    required: true 
    },
});

let Ruta = mongoose.model('Ruta', rutaSchema);

module.exports = Ruta;
