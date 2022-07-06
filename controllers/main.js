const { create, read, readAt, updateAt, deleteAt } = require("../models/main");

async function createStudent(obj, res) {
  try {
    const result = await create(obj);
    if (result) {
      res.status(200).json({ msg: "created!", body: result });
    }
  } catch (error) {
    console.log(error);
  }
}

async function readStudents(res) {
  try {
    const result = await read();
    if (result) {
      res.status(200).json({ msg: "success!", body: result });
    }
  } catch (error) {
    console.log(error);
  }
}

async function readStudentAt(obj, res) {
  try {
    const result = await readAt(obj);
    if (result) {
      res.status(200).json({ msg: "success!", body: result });
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateStudent(obj1, obj2, res) {
  try {
    const obj = { id: obj1.id, fullName: obj2.fullName, major: obj2.major };

    const result = await updateAt(obj);
    if (result) {
      res.status(200).json({ msg: "updated!", body: result });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteStudent(obj, res) {
  try {
    const result = await deleteAt(obj);
    if (result) {
      res.status(200).json({ msg: "deleted!", body: result });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createStudent,
  readStudents,
  readStudentAt,
  updateStudent,
  deleteStudent,
};
