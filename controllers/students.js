import pool from "../database.js";
import DTOResponses from "../utils/responses.js";

const getStudentByCedula = async (req, res) => {
  try {
    const { cedula } = req.params;
    const response = await pool.query({
      text: "SELECT * FROM estudiantes WHERE cedula = $1",
      values: [cedula],
    });
    return DTOResponses.singleDTOResponse(
      res,
      200,
      "Estudiante recuperado con éxito",
      response
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
    const response = await pool.query("SELECT * FROM estudiantes");
    return DTOResponses.multipleDTOsResponse(
      res,
      200,
      "Estudiantes recuperados con éxito",
      response
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
    const response = await pool.query({
      text: "INSERT INTO estudiantes (codigo_escuela,) VALUES($1, $2, $3)",
      values: [],
    });
    return DTOResponses.successDTOResponse(
      res,
      201,
      "Estudiante creado con éxito"
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al crear al estudiante"
    );
  }
};

const updateStudent = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al actualizar al estudiante"
    );
  }
};

const deleteStudent = async (req, res) => {
  try {
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
  deleteStudent,
};
