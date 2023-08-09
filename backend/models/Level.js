let mongoose = require('mongoose');

let levelSchema = new mongoose.Schema({
  nombre:{ 
    type: String, 
    required: true 
    },
  ruta: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Ruta', required: true 
    },
  duración: { 
    type: String 
    },
});

let Level = mongoose.model('Level', levelSchema);

module.exports = Level;
