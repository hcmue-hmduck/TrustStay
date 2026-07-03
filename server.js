const express = require('express');
require('dotenv').config();

const configViewEngine = require('./src/Configs/viewEngine');
const configDatabase = require('./src/Configs/configDatabase');

const webRouters = require('./src/Routes/web');


const app = express();

configViewEngine(app);
configDatabase();

app.use('/', webRouters);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})