const express = require('express');
const routes = requiere('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3031);