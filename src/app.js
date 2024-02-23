//node --watch src/app.js
//npm remove nodemon

console.log("Hola NodeJs")

import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from './routes/index.js';
import {port} from './config.js';

const app = express();
app.use(express.json());
//const p = 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'views'));


//Configurar motor de plantillas
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

//Configurar el enrutador
app.use(indexRoutes);

//Configurar la carpeta public como estática
app.use(express.static(join(__dirname, 'public')));

//Creamos el servidor
app.listen(port)
console.log('Escuchando por el puerto', port);