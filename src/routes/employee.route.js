import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newemployeevalidator } from '../validators/employee.validator';


const router = express.Router();

router.post('/',userAuth,newemployeevalidator,employeeController.createEmployee);

router.get('/',employeeController.getallEmployee);

router.delete('/:id', employeeController.deleteEmployee);


export default router;