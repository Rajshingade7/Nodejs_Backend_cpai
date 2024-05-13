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


export const getallEmployee = async (req, res, next) => {
  try {
    const data = await employeeservice.getallEmployee();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};


export const deleteEmployee = async (req, res, next) => {
  try {
    const deletedEmployee = await employeeservice.deleteEmployee(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: deletedEmployee, 
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

