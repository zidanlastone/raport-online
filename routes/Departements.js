const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const db = require("../models");

// route api/departement
// get departement by kelas
// access public
router.get("/", auth, (req, res) => {
  db.departements
    .findAll()
    .then(departement => {
      res.json(departement);
    })
    .catch(err => console.log(err));
});

// insert departement to database
router.post("/", auth, (req, res) => {
  const { departementName } = req.body;
  db.departements
    .create({
      departementName
    })
    .then(departement => res.json(departement))
    .catch(err => console.log(err));
});

// update departement database
router.put("/:id", auth, (req, res) => {
  const { departementName } = req.body;
  db.departements
    .update(
      {
        departementName
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

// delete departement
router.delete("/:id", auth, (req, res) => {
  db.departements
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err));
});

module.exports = router;
