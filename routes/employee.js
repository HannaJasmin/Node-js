var express = require('express');
const { AddEmployee, GetAllEmployees, UpdateEmployee, DeleteEmployee, EmployeeDetails } = require('../controllers/employeecontroller');
var router = express.Router();

/* GET users listing. */
router.post('/addemployee',AddEmployee);
router.put('/updateemployee/:employeeId',UpdateEmployee);
router.delete('/deleteemployee/:employeeId',DeleteEmployee);
router.get('/employeedetails/:employeeId',EmployeeDetails);
router.get('/getallemployees',GetAllEmployees)


module.exports = router;