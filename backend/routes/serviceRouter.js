import express from 'express'
import multer from 'multer'

import { createService, deleteService, getServices, getServicesById, updateService } from '../controllers/serviceController.js'

const upload = multer({dest: "/tmp"});
const serviceRouter = express.Router();

serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServicesById);

serviceRouter.post('/', upload.single("image"), createService);
serviceRouter.put("/:id", upload.single("image"), updateService);

serviceRouter.delete("/:id", deleteService);

export default serviceRouter;