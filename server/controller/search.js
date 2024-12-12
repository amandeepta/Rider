const express = require('express');
const Create = require('../models/create');

const Search = async (req, res) => {
    const { source, destination } = req.body;

    if (!source || !destination) {
        return res.status(400).json({ message: 'Source and destination are required' });
    }
    console.log(source);
    console.log(destination);
    try {
        const data = await Create.find({ source, destination });

        if (data.length === 0) {
            return res.status(404).json({success: true,
                 message: 'No rides were found for the given location' });
        }

        return res.status(200).json({ success : true, data });
    } catch (error) {
        return res.status(500).json({success : false, message: 'An error occurred while searching for rides', error: error.message });
    }
};

module.exports = Search;