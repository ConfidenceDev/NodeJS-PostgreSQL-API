const router = require("express").Router();
const {
  createStudent,
  readStudents,
  readStudentAt,
  updateStudent,
  deleteStudent,
} = require("../controllers/main");

//CREATE
router.post("/", async (req, res) => {
  createStudent(req.body, res);
});

//READ
router.get("/", async (req, res) => {
  readStudents(res);
});

router.get("/:id", async (req, res) => {
  readStudentAt(req.params, res);
});

//UPDATE
router.put("/:id", async (req, res) => {
  updateStudent(req.params, req.body, res);
});

//DELETE
router.delete("/:id", async (req, res) => {
  deleteStudent(req.params, res);
});

module.exports = router;
