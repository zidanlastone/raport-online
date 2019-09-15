const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const db = require("../models");

// route api/siswa
// get siswa by kelas
// access private
router.get("/", auth, (req, res) => {
  db.students
    .findAll()
    .then(siswa => {
      res.json(siswa);
    })
    .catch(err => console.log(err));
});

router.get("/detail/:id", auth, (req, res) => {
  db.students
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(siswa => {
      res.json(siswa);
    })
    .catch(err => console.log(err));
});

router.get("/:id", auth, (req, res) => {
  db.students
    .findAll({
      where: {
        id_kelas: req.params.id
      }
    })
    .then(siswa => {
      res.json(siswa);
    })
    .catch(err => console.log(err));
});

// insert siswa to database
router.post("/", auth, (req, res) => {
  const {
    nis,
    nisn,
    name,
    birthLocation,
    birthDate,
    gender,
    religion,
    address,
    dateOfEntry,
    image
  } = req.body;
  db.students
    .create({
      nis,
      nisn,
      name,
      birthLocation,
      birthDate,
      gender,
      religion,
      address,
      dateOfEntry,
      image
    })
    .then(student => res.json(student))
    .catch(err => console.log(err));
});

// update siswa database
router.put("/:id", auth, (req, res) => {
  const {
    nis,
    nisn,
    name,
    birthLocation,
    birthDate,
    gender,
    religion,
    address,
    dateOfEntry,
    image
  } = req.body;
  db.students
    .update(
      {
        nis,
        nisn,
        name,
        birthLocation,
        birthDate,
        gender,
        religion,
        address,
        dateOfEntry,
        image
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err));
});

// delete siswa
router.delete("/:id", auth, (req, res) => {
  db.students
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err));
});

module.exports = router;
