require('dotenv').config();

//Declaration of an express application
const express = require('express');
const logger = require('morgan');

//Here we execute the file where mongoose is configured
require('./config/db.config');

const app = express();

//Integration of the views in our application.
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(__dirname + '/public'));

//Middleware

//Morgan shows us the logs of our application
//That 'dev' specifies how Morgan will show the traces, it has nothing to do with the 'dev' of our scripts
app.use(logger('dev'));

//Here we attach our route file.
const routes = require('./config/routes.config');
app.use('/', routes);

//Assignment of port 3000 to our app.
const port = 3000;
app.listen(port, () => console.log(`Application running in port ${port}`));