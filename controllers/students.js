import pool from "../database.js";
import DTOResponses from "../utils/responses.js";

const getStudentByCedula = async (req, res) => {
  try {
    const { cedula } = req.params;
    const { rows } = await pool.query({
      text: `
      SELECT * 
      FROM estudiantes 
      WHERE 
          cedula = $1
      ;
      `,
      values: [cedula],
    });
    return DTOResponses.singleDTOResponse(
      res,
      200,
      "Estudiante recuperado con éxito",
      rows
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al recuperar al estudiante"
    );
  }
};

const getStudents = async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM estudiantes;`);
    console.log(rows);
    return DTOResponses.multipleDTOsResponse(
      res,
      200,
      "Estudiantes recuperados con éxito",
      rows
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al recuperar a los estudiantes"
    );
  }
};

const createStudent = async (req, res) => {
  try {
    const {
      cedula,
      nombre,
      codigo_escuela,
      direccion,
      telefono,
      fecha_nacimiento,
      estatus
    } = req.body;
    await pool.query({
      text: `
      INSERT INTO estudiantes 
          (cedula, nombre, codigo_escuela, direccion, telefono, fecha_nacimiento, estatus) 
          VALUES ($1, $2, $3, $4, $5, $6, $7)
      ;
      `,
      values: [cedula, nombre, codigo_escuela, direccion, telefono, fecha_nacimiento, estatus],
    });
    return DTOResponses.successDTOResponse(res, 201, "Estudiante creado con éxito");
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res, 
      500, 
      "Hubo un error al crear al estudiante"
    );
  }
};

//Doesn't update student's cedula, it's used to find the student to update
const updateStudent = async (req, res) => {
  try {
    const {
      nombre,
      codigo_escuela,
      direccion,
      telefono,
      fecha_nacimiento,
      estatus
    } = req.body;
    const { cedula } = req.params;
    await pool.query({
      text: `
      UPDATE estudiantes
      SET 
          nombre = $1,
          codigo_escuela = $2, 
          direccion = $3, 
          telefono = $4, 
          fecha_nacimiento = $5, 
          estatus = $6
      WHERE
          cedula = $7
      ;
      `,
      values: [nombre, codigo_escuela, direccion, telefono, fecha_nacimiento, estatus, cedula],
    });
    return DTOResponses.successDTOResponse(
      res, 
      200, 
      "Estudiante actualizado con éxito"
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al actualizar al estudiante"
    );
  }
};

const deleteStudentByCedula = async (req, res) => {
  try {
    const { cedula } = req.params;
    await pool.query({
      text: `
      DELETE FROM estudiantes
      WHERE
          cedula = $1
      ;
      `,
      values: [cedula]
    });
    return DTOResponses.successDTOResponse(
      res, 
      200, 
      "Estudiante eliminado con éxito"
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al eliminar al estudiante"
    );
  }
};

export default {
  getStudentByCedula,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudentByCedula,
};