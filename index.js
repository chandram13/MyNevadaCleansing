import express from 'express'
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
// const express = require('express')

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use('/users', usersRoutes)

app.get('/',(req, res) => res.send('Welcome to Eforea Spa at the Hilton Grand Vacation Club on the Las Vegas Strip.'));
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
