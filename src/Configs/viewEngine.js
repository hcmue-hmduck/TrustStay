const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const configViewEngine = (app) => {
    app.use(expressLayouts);
    app.set('layout', 'layouts/homeLayout');
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '..', 'Views'));
}

module.exports = configViewEngine;
