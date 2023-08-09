let mongoose = require('mongoose');

let camperSchema = new mongoose.Schema({
  nombre: { type: String, 
    required: true 
    },
  típoIdentificacion: { 
    type: String 
    },

  NroIdentificacion: { 
    type: Number 
    },
  email: {
     type: String, 
     required: true 
    },
  password: { 
    type: String, 
    required: true 
    },
  level: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Level', 
    required: true 
    },
  levelState: { 
    type: String,
    enum: ['Pending','Completed'] 
    },
  estado :{
    type:Boolean,
    default: true
    },
  imagen: { 
    type: String 
    },
  rol: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Role', required: true },
  promedio: { 
    type: Number 
    },
});

let Camper = mongoose.model('Camper', camperSchema);

module.exports = Camper;
