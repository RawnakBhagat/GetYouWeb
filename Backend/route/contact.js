const express = require("express")
const contact = require("../model/conatct");
const contactRoute = express.Router()

contactRoute.get('/',async (req,res)=>{
    try {
        const allOrders = await contact.find();
        res.json(allOrders)
    }catch{
        console.log("err")
    }
})
contactRoute.post('/',async (req,res)=>{
    const {name,email,number,message} = req.body
    try{
        const addServicedata = await contact.create({
            name:name,
            email:email,
            number:number,
            message:message
        })
        res.json(addServicedata)
    }catch(error){
        console.log(error)
    }
})
module.exports = contactRoute