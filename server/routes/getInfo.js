const express = require('express');
const router = express.Router();
const Create = require('../models/create');

router.post('/info', async (req, res) => {
    try {
        const {id} = req.body;
        console.log(id);
        const user = await Create.findById(id);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        
        res.json({
            success: true,
            message: "User found",
            data: user
        });
    } catch (err) {
       
        console.error(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the user"
        });
    }
});

module.exports = router;
