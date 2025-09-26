const express = require('express');
const app = express();


// Con esta declaración podemos usar rutas absolutas con compatibilidad para cualquier sistema operativo
const path = require('path');


  //// El puerto que más tarde modificaremos // 
const port = process.env.PORT || 3000;  

// Middleware para servir archivos estáticos en este caso HTML desde la carpeta public
app.use(express.static('public')); // Ya de por sí sirve los archivos estáticos en la carpeta public


/// PRIMERA PETCIÓN GET ENTREGA CON RES.SENDFILE UN ARCHIVO ESTÁTICO HTML --
//  DIRNAME ESTABLECE LA RUTA ABSOLUTA DEL DIRECTORIO A index1.html

app.get('/index1', (req, res) => {
  res.sendFile(__dirname + '/public/index1.html');
});


// SEGUNDA PETICIÓN GET ENTREGA CON RES.SENDFILE UN ARCHIVO ESTÁTICO HTML --
//  DIRNAME ESTABLECE LA RUTA ABSOLUTA DEL DIRECTORIO A index2.html
app.get('/index2', (req, res) => {
  res.sendFile(__dirname + '/public/index2.html');
});


//Levanto el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
