import pool from "../database.js";
import DTOResponses from "../utils/responses.js";

const getSchool = async (req, res) => {
  try {
    const { codigo } = req.params;
    const { rows } = await pool.query({
      text: `
      SELECT * 
      FROM escuelas 
      WHERE 
          codigo = $1
      ;
      `,
      values: [codigo],
    });
    return DTOResponses.singleDTOResponse(
      res,
      200,
      "Escuela recuperada con éxito",
      rows
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al recuperar a la escuela"
    );
  }
};

const getSchools = async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM escuelas;`);
    return DTOResponses.multipleDTOsResponse(
      res,
      200,
      "Escuelas recuperadas con éxito",
      rows
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al recuperar a las escuelas"
    );
  }
};

const createSchool = async (req, res) => {
  try {
    const {
      nombre,
      fecha_creacion
    } = req.body;
    await pool.query({
      text: `
      INSERT INTO escuelas 
          (nombre, fecha_creacion) 
          VALUES ($1, $2)
      ;
      `,
      values: [nombre, fecha_creacion],
    });
    return DTOResponses.successDTOResponse(res, 201, "Escuela creada con éxito");
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res, 
      500, 
      "Hubo un error al crear a la escuela"
    );
  }
};

//Doesn't update school's codigo, it's used to find the school to update
const updateSchool = async (req, res) => {
  try {
    const {
      nombre,
      fecha_creacion
    } = req.body;
    const { codigo } = req.params;
    await pool.query({
      text: `
      UPDATE escuelas
      SET 
          nombre = $1,
          fecha_creacion = $2
      WHERE
          codigo = $3
      ;
      `,
      values: [nombre, fecha_creacion, codigo],
    });
    return DTOResponses.successDTOResponse(
      res, 
      200, 
      "Escuela actualizada con éxito"
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al actualizar a la escuela"
    );
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { codigo } = req.params;
    await pool.query({
      text: `
      DELETE FROM escuelas
      WHERE
          codigo = $1
      ;
      `,
      values: [codigo]
    });
    return DTOResponses.successDTOResponse(
      res, 
      200, 
      "Escuela eliminada con éxito"
    );
  } catch (err) {
    console.error(err);
    return DTOResponses.errorDTOResponse(
      res,
      500,
      "Hubo un error al eliminar a la escuela"
    );
  }
};

export default {
  getSchool,
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
};