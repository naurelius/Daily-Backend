import * as e from 'express';
//import * as helmet from "helmet";
///import cors from "cors";
import * as process from "process";
//import morgan from 'morgan';
import router from './routes/index';
var helmet = require('helmet')
var cors = require('cors')
var morgan = require('morgan')

const port: string|number = process.env.PORT || 3000;

var express = require('express')

const app:e.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'))

//routes
app.use('/', router)

app.get('/', (req, res) => {
    res.send("Hello")
});

app.listen(port, () => {
    console.log(`server running on ${port}`)
});

