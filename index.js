require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const UsersController = require('./Controller/LoginController');
const loginValidation = require('./Middlewares/loginMiddlewares');

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post("/login", loginValidation, UsersController);