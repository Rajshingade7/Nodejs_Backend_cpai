import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newEmployeeValidator } from '../validators/employee.validator';


const router = express.Router();

router.get('/',userAuth,newEmployeeValidator,employeeController.createEmployee);

export default router;