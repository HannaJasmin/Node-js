const { Sequelize, DataTypes } = require('sequelize');
const { Departments } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Department = require('../models/Userdepartment');

const secret=process.env.DBSECRET;


module.exports.AddDepartment =async (req,res,next)=>{
   
    try { 

        const { Departmentname,Totalemployee } = req.body;

        // Validate input
        if (!Departmentname || !Totalemployee ) {
          return res.status(400).json({ error: 'Departmentname, Totalemployee are required' });
        }

        // Create expense in the database
        const newDepartment = await Departments.create({
          Departmentname,
          Totalemployee,
        });
    
        // Send the newly created expense as a response
        res.status(201).json(newDepartment);
      } catch (error) {
        // Handle errors
        console.error('Error adding Department:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
     
    };

      module.exports.UpdateDepartment = async (req, res) => {
        try {
          const { departmentId } = req.params; // Extract employee ID from URL params
          const updateData = req.body; // Extract updated fields from the request body
      
          // Find the employee by ID
          const department = await Departments.findByPk(departmentId);
      
          // Check if employee exists
          if (!department) {
            return res.status(404).json({ error: 'Department not found' });
          }
      
          // Update employee details
          await department.update(updateData);
      
          res.status(200).json({ message: 'Department updated successfully', department });
        } catch (error) {
          console.error('Error updating department:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };
      
      
      module.exports.DeleteDepartment = async (req, res, next) => {
        try {
          const { departmentId } = req.params; 
        
          // Check if the user ID is provided
          if (!departmentId) {
            return res.status(400).json({ error: 'Department ID is required' });
          }
      
          // Delete the customer
          const deletedDepartment = await Departments.destroy({
            where: { _id: departmentId }
          });
      
          // Check if any customer was deleted
          if (deletedDepartment === 0) {
            return res.status(404).json({ error: 'Department not found' });
          }
      
          // Send a success response
          res.status(200).json({ message: 'Department deleted successfully' });
        } catch (error) {
          // Handle errors
          console.error('Error deleting Us:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
module.exports.DepartmentDetails = async (req, res, next) => {
        try {
          const { departmentId } = req.params;
          const department = await Departments.findByPk(departmentId);

          if (!department) {
            
            return res.status(404).json({ error: "Department not found" });
          }

          res.status(200).json(department);

        } catch (error) {
          console.error("Error fetching Department details:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      };
module.exports.GetAllDepartments = async (req, res, next) => {
        try {
          //const { departmentId } = req.params;
          const department = await Departments.findAll();
          
          if (department.length === 0) {
            return res.status(404).json({ message: 'No departments found' });
          }

          res.status(200).json(department);

        } catch (error) {
          console.error("Error fetching Department details:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      };
      