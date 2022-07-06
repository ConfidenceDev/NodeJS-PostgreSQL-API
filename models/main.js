const pool = require("../utils/db");

async function create(obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const newStudent = await pool.query(
        `INSERT INTO students (fullname, major) VALUES ($1, $2) 
                  RETURNING *`,
        [obj.fullName, obj.major]
      );
      resolve(newStudent.rows[0]);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

async function read() {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await pool.query("SELECT * FROM students");
      resolve(all.rows);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

async function readAt(obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await pool.query(
        `
        SELECT * FROM students WHERE id = $1
        `,
        [obj.id]
      );
      resolve(student.rows[0]);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

async function updateAt(obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await pool.query(
        `
            UPDATE students SET fullname = $1, 
            major = $2 WHERE id = $3
            `,
        [obj.fullName, obj.major, obj.id]
      );
      resolve(student.rows);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

async function deleteAt(obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const deleted = await pool.query(
        `
          DELETE FROM students WHERE id = $1
      `,
        [obj.id]
      );
      resolve(deleted.rows);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

module.exports = {
  create,
  read,
  readAt,
  updateAt,
  deleteAt,
};
