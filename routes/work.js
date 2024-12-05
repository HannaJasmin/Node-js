var express = require('express');
const { AddWork, GetAllWork, WorkDetails, DeleteWork, UpdateWork } = require('../controllers/workcontroller');
var router = express.Router();

/* GET users listing. */
router.post('/addwork',AddWork);
router.put('/updatework/:workId',UpdateWork);
router.delete('/deletework/:workId',DeleteWork);
router.get('/workdetails/:workId',WorkDetails);
router.get('/getallwork',GetAllWork);


module.exports = router;