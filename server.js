// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
const dataRoutes = require('./routes/dataRoutes');
const exportRoutes = require('./routes/exportRoutes');

app.use('/api/data', dataRoutes);
app.use('/api/export', exportRoutes);

// Sincronizar la base de datos
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
