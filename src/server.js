const express = require('express');
const routes = require('./routes');

const app = express();

const port = 2000;

app.use(routes);

app.listen(port, () => {
    console.log(`Listening port - ${port}`);
});