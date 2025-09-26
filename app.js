const express = require('express');
const app = express();


// Con esta declaración podemos usar rutas absolutas con compatibilidad para cualquier sistema operativo
const path = require('path');

   
const port = process.env.PORT || 3000;

// SEGUNDA PETICIÓN GET ENTREGA CON RES.SENDFILE UN ARCHIVO ESTÁTICO HTML --
//  DIRNAME ESTABLECE LA RUTA ABSOLUTA DEL DIRECTORIO A index2.html
app.get('/index2', (req, res) => {
  res.sendFile(__dirname + '/public/index2.html');
});


//Levanto el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
