const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const db = require("../models");

// route api/competency
// get competency by kelas
// access public
router.get("/", auth, (req, res) => {
  db.competencies
    .findAll()
    .then(competency => {
      res.json(competency);
    })
    .catch(err => console.log(err));
});

router.get("/:id", auth, (req, res) => {
  db.competencies
    .findAll({
      where: {
        subjectId: req.params.id
      }
    })
    .then(competency => res.json(competency))
    .catch(err => console.log(err));
});

// insert competency to database
router.post("/", auth, (req, res) => {
  const { subjectId, competencyName, semester, kkm } = req.body;
  db.competencies
    .create({
      subjectId,
      competencyName,
      semester,
      kkm
    })
    .then(competency => res.json(competency))
    .catch(err => console.log(err));
});

// update competency database
router.put("/:id", auth, (req, res) => {
  const { subjectId, competencyName, semester, kkm } = req.body;
  db.competencies
    .update(
      {
        subjectId,
        competencyName,
        semester,
        kkm
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

// delete competency
router.delete("/:id", auth, (req, res) => {
  db.competencies
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err));
});

module.exports = router;
