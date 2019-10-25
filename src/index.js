const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');
require('./database/');

const app = express();

app.use(express.json());

app.use(cors());

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', routes);

app.listen(3031);


