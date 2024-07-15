require('express-async-errors');
const error = require('./middlewares/error');
const app = require('express')();

require('./middlewares')(app);
require('./middlewares/routes')(app);
app.use(error);

module.exports = app;