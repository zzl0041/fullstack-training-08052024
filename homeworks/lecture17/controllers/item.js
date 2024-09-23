const Item = require('../models/Item');

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params?.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404).json({ message: 'item not found!' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
};
