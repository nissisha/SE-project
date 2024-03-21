const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    location: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    contactInfo: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    dietaryRestrictions: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'provider',
        required: true
    },
    consumer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'consumer',
        required: true
    },
    useBy:{
        type: Date,
        required: true
    
    }
});

module.exports = mongoose.model('listing', listingSchema);