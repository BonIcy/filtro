let mongoose = require('mongoose');

let centroSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
},
  descripción: {
     type: String 
    },
  estado: {
     type:
    String
 },
  ciudad: { 
    type: String 
},
});

let Centro = mongoose.model('Centro', centroSchema);

module.exports = Centro;
