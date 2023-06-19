import { Router } from "express";

import studentsControllers from "../controllers/students.js"

const studentsRouter = Router();

//Expects nothing
studentsRouter.get("/", studentsControllers.getStudents);

//Expects student's cedula in req.params as "cedula"
studentsRouter.get("/:cedula", studentsControllers.getStudentByCedula);

/** 
 * Expects req.body to contain:
 * cedula::integer>0 
 * nombre::text 
 * codigo_escuela::integer 
 * direccion::text 
 * telefono::0[0-9]{3}-[0-9]{7} = "0XXX-XXXXXXX" 
 * fecha_nacimiento::date
 * estatus::{ a | r | n | e }
*/
studentsRouter.post("/", studentsControllers.createStudent);

/** 
 * Expects req.body to contain:
 * nombre::text 
 * codigo_escuela::integer 
 * direccion::text 
 * telefono::0[0-9]{3}-[0-9]{7} = "0XXX-XXXXXXX" 
 * fecha_nacimiento::date
 * estatus::{ a | r | n | e }
 * cedula is used to find the student to update, ergo, it's not updated,
 * and has to be specified in req.params
*/
studentsRouter.put("/:cedula", studentsControllers.updateStudent);

/** 
 * Expects req.params to contain:
 * cedula::integer>0 
*/
studentsRouter.delete("/:cedula", studentsControllers.deleteStudentByCedula);

export default studentsRouter;