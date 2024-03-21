const express = require('express');

const router = express.Router();

const providerModel = require('../models/provider');
const consumerModel = require('../models/consumer');
const listingModel = require('../models/listings');

router.post("/createListing", async(req, res) => {
    try{
        const {description,useBy,price,location,contactInfo,dietaryRestrictions,provider,headLine} = req.body;
        const newListing = new listingModel({
            headLine,
            description,
            useBy, 
            price,
            location,
            contactInfo,
            dietaryRestrictions,
            provider
        });
        await newListing.save();
        return res.status(200).json({message: "Listing created successfully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});
router.get("/listings", async(req, res) => {
    try{
        const listings = await listingModel.find({
            useBy:{
                $gte: new Date()
            }
        }).populate('provider');
        console.log(listings);
        return res.status(200).json({listings});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
})

module.exports = router;