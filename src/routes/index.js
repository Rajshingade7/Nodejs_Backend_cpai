const express = require('express');

const router = express.Router();
import employeeRoute from '../routes/employee.route'
import userRoute from '../routes/user.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute)
  router.use('/employee',employeeRoute);

  // router.use('/users', userRoute);

  return router;
};

export default routes;
