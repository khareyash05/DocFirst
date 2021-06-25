const express = require("express")
const app = express()
const dotenv= require("dotenv")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

dotenv.config({path : 'config.env'})

const port = process.env.PORT || 5000

app.use(express.json())

require("./db/conn")
const Doctor = require("./model/docSchema")
const User = require("./model/userSchema")

app.get("/",(req,res)=>{
    res.send("Home")
})

app.get("/doclogin",(req,res)=>{
    res.send("Login")
})

app.get("/docregister",(req,res)=>{
    res.send("Register")
})

app.get("/userlogin",(req,res)=>{
    res.send("Login")
})

app.get("/userregister",(req,res)=>{
    res.send("Register")
})

app.post('/docregister',async (req,res)=>{
    const {name,email,specialisation,password,cpassword} = req.body
    
    if(!name||!email||!specialisation||!password||!cpassword){
        return res.status(422).json({error: "FIll the field"})
    }   
    
    try{
        const userExist = await Doctor.findOne({email : email})
        // userExist will return whole each and every thing if found email same , else null
        if(userExist){
            return res.status(422).json({error: "Email already exist"})
        }
        else if(password !== cpassword){
            return res.status(422).json({error: "Passwords are not same"})
        }
        else{
            // New user making
            bcrypt.hash(password,10,function(err,hash){
                const newUser = new Doctor({
                    name : name,
                    email : email,
                    specialisation:specialisation,                    
                    password : hash,
                    cpassword:hash
                })
                newUser.save((err)=>{
                    if(err){
                        console.log(err);
                    }
                    else { 
                        res.status(201).json({message: "added sucessfully"})
                    }
                })       
            })
        }
                
    }catch(err){
        console.log(err);
    }    
})

app.post("/doclogin",async (req,res)=>{
    const{email,password} = req.body
    if(!email||!password){
        return res.status(422).json({"Message":"fill the field"})
    }

    try{
        const userLogin = await Doctor.findOne({email : email})
        // console.log(userLogin);
        if(userLogin){
            const passMatch = await bcrypt.compare(password,userLogin.password)
            console.log(passMatch);
            if(passMatch){
                return res.status(200).json({"Message" : "Welcome"})                
            }
            else{
                return res.status(400).json({"message" : "Invalid Credentials"})
            }
        }
        else{
            console.log("Doctor not registered");
            return res.status(500).json({"message" : "Dcotor not registered"})            
        }
    }catch(err){
        console.log(err);
    }
})

app.post('/userregister',async (req,res)=>{
    const {name,email,password,cpassword} = req.body
    
    if(!name||!email||!password||!cpassword){
        return res.status(422).json({error: "FIll the field"})
    }   
    
    try{
        const userExist = await User.findOne({email : email})
        // userExist will return whole each and every thing if found email same , else null
        if(userExist){
            return res.status(422).json({error: "Email already exist"})
        }
        else if(password !== cpassword){
            return res.status(422).json({error: "Passwords are not same"})
        }
        else{
            // New user making
            bcrypt.hash(password,10,function(err,hash){
                const newUser = new User({
                    name : name,
                    email : email,            
                    password : hash,
                    cpassword:hash
                })
                newUser.save((err)=>{
                    if(err){
                        console.log(err);
                    }
                    else { 
                        res.status(201).json({message: "added sucessfully"})
                    }
                })       
            })
        }
                
    }catch(err){
        console.log(err);
    }    
})

app.post("/userlogin",async (req,res)=>{
    const{email,password} = req.body
    if(!email||!password){
        return res.status(422).json({"Message":"fill the field"})
    }

    try{
        const userLogin = await User.findOne({email : email})
        // console.log(userLogin);
        if(userLogin){
            const passMatch = await bcrypt.compare(password,userLogin.password)
            console.log(passMatch);
            if(passMatch){
                return res.status(200).json({"Message" : "Welcome"})                
            }
            else{
                return res.status(400).json({"message" : "Invalid Credentials"})
            }
        }
        else{
            console.log("User not registered");
            return res.status(500).json({"message" : "User not registered"})            
        }
    }catch(err){
        console.log(err);
    }
})


app.listen(port)