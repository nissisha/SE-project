const express = require('express');

const router = express.Router();

const providerModel = require('../models/provider');
const consumerModel = require('../models/consumer');

router.post("/registration-provider", async(req, res) => {
    try{
        const {name, email, password, contactInfo, address} = req.body;
        const provider = new providerModel({name, email, password, contactInfo, address});
        await provider.save();
        return res.status(201).json({message: "Provider registered successfully",provider});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

router.post("/registration-consumer", async(req, res) => {
    try{
        const {name, email, password} = req.body;
        const consumer = new consumerModel({name, email, password});
        await consumer.save();
        return res.status(201).json({message: "Consumer registered successfully",consumer});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});
