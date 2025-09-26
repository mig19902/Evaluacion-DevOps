const express = require('express');
const app = express();



const port = process.env.PORT || 3000; // El puerto se toma de la variable de entorno de Heroku, o usa 3000 localmente.

const path = require('path');

// Eliminamos app.use(express.static) y definimos todas las rutas estáticas de forma explícita
// para forzar la resolución del archivo en Heroku.

// 1. RUTA RAÍZ (/)
// Esta ruta resuelve el Cannot GET / y devuelve la página de inicio.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

// 2. RUTA EXPLÍCITA A index1.html
// Esto asegura que si el usuario escribe /index1.html, también funcione.
app.get('/index1.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

// 3. RUTA EXPLÍCITA A index2.html
// Esto asegura que la navegación interna y la ruta directa funcionen.
app.get('/index2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

// El servidor escucha en el puerto definido
app.listen(port, () => {
  console.log(`Servidor de ejemplo escuchando en http://localhost:${port}`);
});
