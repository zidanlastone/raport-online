const express = require('express');
const router = express.Router();
const config = require('config');
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// route api/user
// get siswa by kelas
// access private

// insert user to database
router.post('/', (req, res) => {
    let {
        name,
        email,
        username,
        password,
        role
    } = req.body;

    if (!name || !email || !username || !password) return res.status(400).json({
        msg: 'Please enter all fields'
    });

    db.user.findOne({
        where: {
            username: username
        }
    }).then(user => {
        if (user) return res.status(400).json({
            msg: 'user aleready exist'
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) throw err;
                password = hash;
                db.user.create({
                    name,
                    email,
                    username,
                    password,
                    role
                })
                .then(user => {
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
                    .catch(err => console.log(err));
            })
        });
    })
});

// delete siswa
router.delete('/:id', (req, res) => {
    db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err));
});

module.exports = router;