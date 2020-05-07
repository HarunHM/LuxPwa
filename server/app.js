const express = require('express');

const path = require('path');

const http = require('http');

const bodyparser = require('body-parser');

/* decraling an app variable initializing it as an express application  */
const express = express();

/*  */
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

/* pointing to the static files */
app.use(express.static(path.join(__dirname, 'dist')));

/* import the end points */
const Routes = require('/server/routes');
Routes(app, __dirname);

/* Get port from the environment and store in Express */
const port = process.env.PORT || '3000';
app.set('port', port);

/* create HTTP SERVER */
const server  = http.createServer(app);

/* */
server.listen(port, () => console.log(`Api running on local host: ${port}`));