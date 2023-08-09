let path = require('path');
let mime = require('mime-types');

let uploadFile = async (req, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    return res.status(400).send('No files were uploaded.');
  }

  let { file } = req.files;
  let allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg','image/gif'];

  // verificar si el archivo es imagen
  if (!allowedMimeTypes.includes(mime.lookup(file.name))) {
    return res.status(400).json({ error: 'El archivo debe ser una imagen (JPEG, JPG, PNG o GIF).' });
  }
  let uploadPath = path.join(__dirname, '../uploads/', file.name);
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.json({ msg: 'Archivo subido: ' + uploadPath });
  });
};

module.exports = {
  uploadFile,
};
