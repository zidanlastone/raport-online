const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../models');


// route api/subject
// get subject by kelas
// access public
router.get('/', auth, (req, res) => {
    db.subjects.findAll({
        include:[{
            model:db.teachers
        }]
    })
        .then(subject => {
            res.json(subject);
        })
        .catch(err => console.log(err));
});

// insert subject to database
router.post('/', auth, (req, res) => {
    const {
        teacherId,
        subjectName
    } = req.body;
    db.subjects.create({
            teacherId,
            subjectName
        })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

// update subject database
router.put('/:id', auth, (req, res) => {
    const {
        teacherId,
        subjectName
    } = req.body;
    db.subjects.update({
            teacherId,
            subjectName
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

// delete subject
router.delete('/:id', auth, (req, res) => {
    db.subjects.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

module.exports = router;