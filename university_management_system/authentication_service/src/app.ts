import express, { Application }  from 'express';

const cors = require('cors');

const app:Application = express();
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes

export default app