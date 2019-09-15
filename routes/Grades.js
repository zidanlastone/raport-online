const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const db = require("../models");

// route api/Kelas
// get Kelas by kelas
// access private

router.get("/", auth, (req, res) => {
  db.grades
    .findAll({
      include: [
        {
          model: db.teachers
        },
        {
          model: db.departements
        }
      ]
    })
    .then(Kelas => {
      res.json(Kelas);
    })
    .catch(err => console.log(err));
});

router.get("/:id", auth, (req, res) => {
  db.grades
    .findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.students,
          as: "students",
          required: false
        }
      ]
    })
    .then(Kelas => {
      res.json(Kelas);
    })
    .catch(err => console.log(err));
});

router.post("/add-to-grade", auth, (req, res) => {
  const jsondata = req.body;
  db.students_at_grade
    .bulkCreate(jsondata)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
});

router.delete("/delete-from-grade/:id", auth, (req, res) => {
  db.students_at_grade
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err));
});

// membuat kelas baru
router.post("/", auth, (req, res) => {
  const {
    gradeName,
    departementId,
    homeroomTeacherId,
    yearOfEntry,
    outYear
  } = req.body;
  db.grades
    .create({
      gradeName,
      departementId,
      homeroomTeacherId,
      yearOfEntry,
      outYear
    })
    .then(grade => res.json(grade))
    .catch(err => console.log(err));
});

// update Kelas database
router.put("/:id", auth, (req, res) => {
  const {
    gradeName,
    departementId,
    homeroomTeacherId,
    yearOfEntry,
    outYear
  } = req.body;
  db.grades
    .update(
      {
        gradeName,
        departementId,
        homeroomTeacherId,
        yearOfEntry,
        outYear
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

// delete Kelas
router.delete("/:id", auth, (req, res) => {
  db.grades
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err));
});

module.exports = router;
