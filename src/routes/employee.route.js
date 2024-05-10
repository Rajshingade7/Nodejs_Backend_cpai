import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newemployeevalidator } from '../validators/employee.validator';


const router = express.Router();

router.post('/',userAuth,newemployeevalidator,employeeController.createEmployee);

export default router;