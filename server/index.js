const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const User = require('./models/user_model')
const Paper = require('./models/paper_model')
const jwt = require('jsonwebtoken')
const { urlencoded } = require('express')
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


    app.post("/api/upload",async(req,res) =>{
        console.log(req.body)
        Paper.create({
        email : req.body.email,
        area : req.body.area,
        issuedby : req.body.issuedby,
        year : req.body.year,
        citation : req.body.citation,
        patent : req.body.patent,
        privat : req.body.privat,
        ptitle : req.body.ptitle,
        DOI : req.body.DOI,
        typep : req.body.typep,
        paperlink : req.body.paperlink,
        abstract : req.body.abstract,
        author : req.body.author


        // email : {type : String, required : true},
        // area : {type : String, required : true},
        // issuedby : {type : String, required : true},
        // year:{type : String, required : true},
        // citation:{type : String, required : true},
        // patent:{type : String, required: true},
        // privat:{type : String, required: true},
        // DOI :{type : String, required:true,unique : true},
        // typep : {type : String, required : true},
        // paperlink : {type : String, required : true},
        // ptitle : {type : String, required : true}

        // cpassword : req.body.cpassword
            
        },function(err,newu)
        {
            if(err)
            {
                console.log(err);
                return res.json({status : 'error'})
            }
            // this.context.router.transitionTo("/login");
            // res.redirect('http://localhost:3000/login')
            console.log("Paper Added : ",newu);
            return res.json({status : 'ok'})
            //window.location.href('./api/login')
        });
    })


    app.post('/api/login',async(req,res) => {
        console.log(req.body)
        
            const user = await User.findOne({
                email : req.body.email,
            })
            console.log(user.password)
            
            if(user.password === req.body.password)
            {
            
                const token = jwt.sign(
                    {
                        email : user.email,
                    },
                    'secret123'
                )

                console.log("correct Password")
                return res.json({status : 'ok' , user : token})
    
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
            user_type : req.body.user_type
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
// app.post('/api/login',async(req,res) => {
//     console.log(req.body)
// })
app.post('/api/forgotpassword',async(req,res) => {
    // try{
        console.log(req.body )
        var user = await User.findOne({email : req.body.email});
        console.log(user)
        if(!user){
            return res.status(400).json({status : 'user not found'})
        }

        
        user.password = req.params.password

        await user.Save({ validateBeforeSave: false }).then(data => {
            return res.status(200).json({status : 'Success'})
        })
        .catch(err => {
            return res.status(400).json({status : 'Error'})
        })


    // }
    // var query = { 'email' : req.email };
    // User.findOne(query)
    console.log(req.body)
})

app.get('/api/paperdata', async (req, res) => {
    console.log("sfdsfd")
	try {
		 paperData = await Paper.find({}, )
         console.log(paperData)
         res.json({paperList: paperData})
			// if (err) {
            //     console.log('hi')
			// 	console.log(error)
			// }
			// else {
			// 	console.log('query successful')
			// 	console.log(paperdata)
			// 	res.json({paperList: paperdata})
			// }

	} catch (error) {
		console.log(error)
		res.json({ status: error })
	}
	// console.log("data sent")
	// res.json({status: "ok"})
})


app.listen(1337,() => {
    console.log("server started on 1337")
}) 

