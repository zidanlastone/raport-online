const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../models');


// route api/score
// get score by score
// access public
router.get('/', auth, (req, res) => {
    db.scores.findAll()
        .then(score => {
            res.json(score);
        })
        .catch(err => console.log(err));
});

// insert score to database
router.post('/', auth, (req, res) => {
    let jsondata = req.body;

    db.scores.bulkCreate(jsondata)
        .then((n) => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

// update score database
router.put('/:id', auth, (req, res) => {
    const {
        studentId,
        competencyId,
        score
    } = req.body;
    db.scores.update({
            studentId,
            competencyId,
            score
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

// delete score
router.delete('/:id', auth, (req, res) => {
    db.scores.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

module.exports = router;