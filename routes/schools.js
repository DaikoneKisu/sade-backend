import { Router } from "express";

import schoolsControllers from "../controllers/schools.js"

const schoolsRouter = Router();

//Expects nothing
schoolsRouter.get("/", schoolsControllers.getSchools);

//Expects schools's codigo in req.params as "codigo"
schoolsRouter.get("/:codigo", schoolsControllers.getSchool);

/** 
 * Expects req.body to contain:
 * nombre::text
 * fecha_creacion::date
*/
schoolsRouter.post("/", schoolsControllers.createSchool);

/** 
 * Expects req.body to contain:
 * nombre::text
 * fecha_creacion::date
 * codigo is used to find the school to update, ergo, it's not updated,
 * and has to be specified in req.params
*/
schoolsRouter.put("/:codigo", schoolsControllers.updateSchool);

/** 
 * Expects req.params to contain:
 * codigo::integer>0 
*/
schoolsRouter.delete("/:codigo", schoolsControllers.deleteSchool);

export default schoolsRouter;