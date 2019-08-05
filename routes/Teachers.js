const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../models');


// route api/Guru
// get Guru by kelas
// access public
router.get('/', auth, (req, res) => {
    db.teachers.findAll()
        .then(Guru => {
            res.json(Guru);
        })
        .catch(err => console.log(err));
});

// insert Guru to database
router.post('/', auth, (req, res) => {
    const {
        nip,
        teacherName
    } = req.body;
    db.teachers.create({
            nip,
            teacherName
        })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

// update Guru database
router.put('/:id', auth, (req, res) => {
    const {
        nip,
        teacherName
    } = req.body;
    db.teachers.update({
            nip,
            teacherName
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

// delete Guru
router.delete('/:id', auth, (req, res) => {
    db.teachers.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

module.exports = router;