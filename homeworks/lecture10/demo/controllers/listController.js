const List = require('../models/List');

exports.createList = async(req, res) => {
    try {
        const list = new List(req.body);
        await list.save();
        res.status(201).json(list);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.getLists = async(req, res) => {
    try {
        const lists = await List.find();
        res.status(201).json(lists);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.deleteList = async (req, res) => {
    try {
        const id = req.params.id;
        const list = await List.findByIdAndDelete(id);
        if (!list) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateList = async (req, res) => {
    try {
        const id = req.params.id;
        const list = await List.findByIdAndUpdate(id);
        if (!list) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo updated'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}