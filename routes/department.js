var express = require('express');
const { AddDepartment,UpdateDepartment,DeleteDepartment, DepartmentDetails, AllDepartmentDetails, GetAllDepartments} = require('../controllers/departmentcontroller');
var router = express.Router();

/* GET users listing. */
router.post('/adddepartmet',AddDepartment);
router.put('/updatedepartment/:departmentId',UpdateDepartment);
router.delete('/deletedepartment/:departmentId',DeleteDepartment);
router.get('/departmentdetails/:departmentId',DepartmentDetails);
router.get('/getalldepartments',GetAllDepartments)


module.exports = router;
