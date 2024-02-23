//Importo sólo el enrutador desde express
import { Router } from "express";
import * as control from "../controllers/controllers.js";

//Inicio el enrutador y lo almaceno en una constante
const router = Router();

router.get("/", control.home);
router.get("/login", control.login);
router.get("/registro", control.registro);

router.get('/showUsers', control.showUsers);

router.post( "/insertUser", control.insertUser);


export default router;