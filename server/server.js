const express = require('express');

const app = express();
require('colors'); 
const cors = require('cors');
app.use(cors())
require('dotenv').config();
require('./db/config');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Traveller Plannner through AI Server!');
});

app.use('/api/plan', require('./routes/plannerRoutes'))
// app.use('/api/plans', )

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`.bgGreen.white.bold);
});


