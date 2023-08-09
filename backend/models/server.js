let express = require('express');
let cors = require('cors');
let fileUpload = require('express-fileupload');
let { dbConnection } = require('../config/config.js');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            // rutas 
            camper : '/api/campers',
            level: '/api/levels',
            ruta: '/api/rutas',
            centro:'/api/centros'
        };

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));
    }

    routes() {
        this.app.use('/api/centros', require('../routes/centro.routes.js'));
        this.app.use('/api/campers', require('../routes/camper.routes.js'));
        this.app.use('/api/levels', require('../routes/level.routes.js'));
        this.app.use('/api/rutas', require('../routes/ruta.routes.js'));
        this.app.use('/api/auth', require('../routes/auth.routes.js'));
        this.app.use('/api/uploads', require('../routes/upload.routes.js'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        });
    }    
}

module.exports = Server
