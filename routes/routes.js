const express = require('express');

const router = express.Router()
const Model = require('../model/model');

module.exports = router;

//Post Method (CREATE)
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method (READE)
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method(READE BY ID)
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // Find the document by ID and update it with the request body
        const updatedData = await Model.findByIdAndUpdate(id, updates, { new: true });

        // If the document is not found, return a 404 error
        if (!updatedData) {
            return res.status(404).json({ message: `Cannot find data with ID ${id}` });
        }

        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete by ID Method (DELETE)
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Model.findByIdAndDelete(id);
        

        if (!data) {
            return res.status(404).json({ message: `Cannot find data with ID ${id}` });
        }

        res.status(200).json({ message: `Data with ID ${id} has been deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});