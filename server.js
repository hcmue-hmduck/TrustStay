const express = require('express');
require('dotenv').config();

const configViewEngine = require('./src/Configs/viewEngine');
const configDatabase = require('./src/Configs/configDatabase');

const webRouters = require('./src/Routes/web');
const apiRouters = require('./src/Routes/api');

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
configDatabase();

app.use('/', webRouters);
app.use('/api', apiRouters);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})