const express = require('express');
const Create = require('../models/create');

const createRide = async (req, res) => {
    const { name, source, destination } = req.body;

    if (!name || !source || !destination) {
        return res.status(400).json({ message: 'Name, source, and destination are required' });
    }

    try {
        const newRide = new Create({ name, source, destination });
        await newRide.save();
        return res.status(201).json({ success: true, message: 'Ride created successfully', ride: newRide });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error creating ride', error: error.message });
    }
};

module.exports = createRide;