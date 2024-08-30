const express = require('express');

const {
  getAllItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/item');

const router = express.Router();

// /api/items
router.get('/items', getAllItems);

router.get('/items/:id', getOneItem);

router.post('/items', createItem);

router.put('/items/:id', updateItem);

router.delete('/items/:id', deleteItem);

module.exports = router;
