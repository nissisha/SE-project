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

router.post("/login-provider", async(req, res) => {
    try{
        const {email, password} = req.body;
        const provider = await providerModel.findOne({email});
        if(!provider){
            return res.status(400).json({message: "Provider not registered"});
        }
        if(provider.password !== password){
            return res.status(400).json({message: "Invalid password"});
        }
        return res.status(200).json({message: "Provider logged in successfully",provider});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
})
router.post("/login-consumer", async(req, res) => {
    try{
        const {email, password} = req.body;
        const consumer = await consumerModel.findOne({email});
        if(!consumer){
            return res.status(400).json({message: "Consumer not registered"});
        }
        if(consumer.password !== password){
            return res.status(400).json({message: "Invalid password"});
        }
        return res.status(200).json({message: "Consumer logged in successfully",consumer});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
})

module.exports = router;
