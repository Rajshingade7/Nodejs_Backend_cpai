import HttpStatus from 'http-status-codes';
import * as employeeservice from '../services/employee.service';
export const createEmployee=async(req,res,next)=>{
    try {
        const data = await employeeservice.createEmployee(req.body);
    
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Employee created successfully'
        });
      } catch (error) {
        next(error);
     }
}
