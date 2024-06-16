const express = require('express')
const route = express.Router()
const service = require("../model/service");
route.get('/',async (req,res)=>{
    try {
        const allOrders = await service.find();
        res.json(allOrders)
    }catch{
        console.log("err")
    }
})
route.post('/',async (req,res)=>{
    const {name,email,type,about} = req.body
    try{
        const addServicedata = await service.create({
            name:name,
            email:email,
            type:type,
            about:about
        })
        res.json(addServicedata)
    }catch{
        console.log('err')
    }
})
module.exports = route