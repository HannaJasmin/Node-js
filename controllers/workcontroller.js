const { Sequelize, DataTypes } = require('sequelize');
const { Works  } = require('../config/db');
const work = require('../models/Work');

module.exports.AddWork = async (req, res, next) => {
    try {
      const { Workname,Totalworks} = req.body;
  
      // Debug: Log the input
      console.log('Request Body:', req.body);
  
      // Validate input
      if (!Workname || !Totalworks) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      // Create the employee
      const newWork = await Works.create({
        Workname,
        Totalworks,
      });
  
      res.status(201).json(newWork);
    } catch (error) {
      console.error('Error adding Work:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports.GetAllWork = async (req, res, next) => {
    try {
      const work = await Works.findAll();
      
      if (work.length === 0) {
        return res.status(404).json({ message: 'No works found' });
      }

      res.status(200).json(work);

    } catch (error) {
      console.error("Error fetching Work details:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports.WorkDetails = async (req, res, next) => {
    try {
      const { workId } = req.params;
      const work = await Works.findByPk(workId);

      if (!work) {
        
        return res.status(404).json({ error: "Work not found" });
      }

      res.status(200).json(work);

    } catch (error) {
      console.error("Error fetching Work details:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  module.exports.UpdateWork = async (req, res) => {
    try {
      const { workId } = req.params;
      const updateData = req.body; 
  
      const work = await Works.findByPk(workId);
  
      if (!work) {
        return res.status(404).json({ error: 'Work not found' });
      }
      
      await work.update(updateData);
  
      res.status(200).json({ message: 'Work updated successfully', work });
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports.DeleteWork = async (req, res) => {
    try {
      const { workId } = req.params; 
  
      const work = await Works.findByPk(workId);
  
      if (!work) {
        return res.status(404).json({ error: 'Work not found' });
      }
  
      // Delete the employee
      await work.destroy();
  
      res.status(200).json({ message: 'Work deleted successfully' });
    } catch (error) {
      console.error('Error deleting work:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };