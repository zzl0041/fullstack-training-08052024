const express = require('express');
const listController = require('../controllers/listController');
const router = express.Router();

router.get('/', listController.getLists);
router.post('/', listController.createList);
router.delete('/:id', listController.deleteList);
router.put('/:id', listController.updateList);

module.exports = router;
