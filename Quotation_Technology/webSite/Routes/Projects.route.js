const express = require('express');
const router = express.Router();
let useController = require('../Controllers/Projects.controls');

router.get('/', useController.get_projects);

module.exports = router;