const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user_model')
app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/practice')
console.log('Connecting to', "mongodb://localhost:27017/practice")

mongoose.connect('mongodb://localhost:27017/practice', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {

        console.log('Connected to MongoDB')

    })

    .catch((error) => {

        console.log('Error connecting to MongoDB:', error.message)

    })
    app.post('/api/login',async(req,res) => {
        console.log(req.body)
        
            const user = await User.findOne({
                email : req.body.email
            })
            console.log(user.password)
            
            if(user.password == req.body.password)
            {
                console.log("correct Password")
                return res.json({status : 'ok'})
    
            }
            else{
                return res.json({status : 'error'})
            }
            // res.json({status : "ok"})
    
        // if (user)
        // {
        //     return res.json({status : 'ok'})
        // }
        // else{
        //     return res.json({status : 'error'})
        // }
        // res.send("hello world")
    })
app.post('/api/register',async(req,res) => {
    console.log(req.body)
        
             User.create({
                name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            // cpassword : req.body.cpassword
                
            },function(err,newu)
            {
                if(err)
                {
                    console.log('User not added');
                    return res.json({status : 'error'})
                }
                // this.context.router.transitionTo("/login");
                // res.redirect('http://localhost:3000/login')
                console.log("created user : ",newu);
                return res.json({status : 'ok'})
                //window.location.href('./api/login')
            });
            
            //  res.redirect('Login')
})


app.listen(1337,() => {
    console.log("server started on 1337")
}) 