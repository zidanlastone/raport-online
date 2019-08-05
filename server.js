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

app.use('/api/auth', require('./routes/Auth'));
app.use('/api/user', require('./routes/User'));
app.use('/api/students', require('./routes/Students'));
app.use('/api/grades', require('./routes/Grades'));
app.use('/api/teachers', require('./routes/Teachers'));
app.use('/api/subjects', require('./routes/Subjects'));
app.use('/api/departements', require('./routes/Departements'));
app.use('/api/competencies', require('./routes/Competencies'));
app.use('/api/scores', require('./routes/Scores'));

let port = process.env.PORT || 5000;
app.listen(port,()=> console.log("server run on port:", port));