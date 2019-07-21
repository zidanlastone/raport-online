const express = require('express');
const models = require('./models');

const app = express();
app.use(express.json());

models.sequelize.sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use('/auth', require('./routes/Auth'));

let port = process.env.PORT || 5000;
app.listen(port,()=> console.log("server run on port:", port));