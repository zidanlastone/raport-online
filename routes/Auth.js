const express = require('express');
const router = express.Router();
const config = require('config');
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// route api/user
// get siswa by kelas
// access private

// insert user to database
router.post('/', (req, res) => {
    let {
        username,
        password
    } = req.body;

    if (!username || !password) return res.status(400).json({
        msg: 'Please enter all fields'
    });

    db.user.findOne({
        where: {
            username: username
        }
    }).then(user => {
        if (!user) return res.status(400).json({
            msg: 'user does not exist'
        });

        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (!isMatch) return res.status(400).json({
                    msg: 'invalid credentials'
                });
                jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    role: user.role
                },
                config.get('jwtSecret'), {
                    expiresIn: 7200
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            username: user.username,
                            role: user.role
                        }
                    })
                }
                )
            })
    })
});

router.get('/user', auth, (req, res) => {
    db.User.findOne({
            where: {
                id: req.user.id
            },
            attributes: {
                exclude: ['password']
            }
        })
        .then(user => res.json(user))
})

// delete siswa
router.delete('/:id', (req, res) => {
    db.user.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

module.exports = router;