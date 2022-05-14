var jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const User = require('./models/user_model')
const Paper = require('./models/paper_model')
const recent_paper = require("./models/recentlyadded")
const request_papers = require("./models/request_papers")
const saved_papers = require("./models/saved_paper")
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
        
            const user = await User.findOne({
                email : req.body.email
            })
            
            try{
                if(user.password == req.body.password)
                {
                 
                    console.log("correct Password")
                    return res.json({status:"success"});
        
                }
                else{
                    return res.json({status : 'error'})
                }
            } catch(e){
                return res.json({status : 'error'})
            }
            
            
    })
app.post('/api/register',async(req,res) => {
    console.log(req.body)
        
             User.create({
                name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            user_type : req.body.user_type
                
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

    app.post('/api/login1',async(req,res) => {
        console.log(req.body)
        
            const user = await User.findOne({
                email : req.body.email,
            })
            console.log(user.password)
           
            
            try{
                    
            if(user.password == req.body.password)
            {
             
                console.log("correct Password")
                res.json({...user._doc })
                // return res.json({status:"success"});
    
            }
            else{
                return res.json({status : 'error'})
            }
            
            } catch(e) {
                return res.json({status : 'error'})
            }

        
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
// app.post("/api/login/",async(req,res) => {
//     const user = await User.findOne({
// 		email: req.body.email,
//         password: req.body.password
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}
//     else{
//         window.alert('Login successful')
//     }
    
// })
app.post('/api/forgotpassword',async(req,res) => {
    // try{
        console.log(req.body)
        var user = await User.findOne({email : req.body.email});
        console.log(user.email);
        var nuser = {_id : user._id,email : req.body.email,name : user.name,password : req.body.password,user_type : user.user_type}
        console.log(nuser)
        User.findByIdAndUpdate({ _id: nuser._id }, nuser, { new: true }, (err, doc) => {


            if (!err) { 
                console.log("Password updated successfully")
                return res.json({status : 'success'}); }
            else {
                return res.json({status : 'error'});
            }
        });
      

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

app.post("/api/update_recently_access_papers",async(req,res)=>{
    console.log(req.body)
    var recent_paper_content = await recent_paper.findOne({email : req.body.email});
    
    if(recent_paper_content == null){
        var temp = [req.body.event]
        recent_paper.create({
        email : req.body.email,
        // $push :{
        //     doi : req.body.event
        // }
        doi : temp
        // cpassword : req.body.cpassword
            
        },function(err,newu)
        {
            if(err)
            {
                console.log('paper added');
                return res.json({status : 'error'})
            }
            // this.context.router.transitionTo("/login");
            // res.redirect('http://localhost:3000/login')
            console.log("paper added : ");
            return res.json({status : 'success'})
            //window.location.href('./api/login')
        });
    }
    else{
        var temp = recent_paper_content.doi
        if (temp.filter(s => s == req.body.event).length == 0)
        {
            if(temp.length < 5){
                temp.push(req.body.event)
            }
            else{
                temp.shift()
                temp.push(req.body.event)
            }
            var nuser = {_id : recent_paper_content._id,email : req.body.email,doi : temp}
        recent_paper.findByIdAndUpdate({ _id: nuser._id }, nuser, { new: true }, (err, doc) => {
            if (!err) { 
                // console.log("doi updated successfully")
                return res.json({status : 'success'}); }
            else {
                return res.json({status : 'error'});
            }
        });
        }
        
        console.log(recent_paper_content)
    }
})

app.post("/api/update_saved_papers",async(req,res)=>{
    var saved_paper_content = await saved_papers.findOne({email : req.body.email});
    
    if(saved_paper_content == null){
        var temp = [req.body.event]
        saved_papers.create({
        email : req.body.email,
        doi : temp
            
        },function(err,newu)
        {
            if(err)
            {
                console.log('paper not saved');
                return res.json({status : 'error'})
            }
            console.log("paper saved : ");
            return res.json({status : 'success'})
        });
    }
    else{
        var temp = saved_paper_content.doi
        if (temp.filter(s => s == req.body.event).length == 0)
        {
            temp.push(req.body.event)
            var nuser = {_id : saved_paper_content._id,email : req.body.email,doi : temp}
        saved_papers.findByIdAndUpdate({ _id: nuser._id }, nuser, { new: true }, (err, doc) => {
            if (!err) { 
                return res.json({status : 'success'}); }
            else {
                return res.json({status : 'error'});
            }
        });
        }
        else{
            return res.json({status : 'Already paper saved'});
        }
        
        // console.log(saved_paper_content)
    }
})


app.post("/api/get_recently_access_papers",async(req,res)=>{
    var recent_paper_content = await recent_paper.findOne({email : req.body.email});
    if(recent_paper_content != null){
        var temp = recent_paper_content.doi
        // console.log(temp);
        var paper_data = []
        for(let i = temp.length - 1 ; i >=0 ; i--){
            var t = await Paper.findOne({DOI : temp[i]});
            console.log(t.DOI)
            paper_data.push(t)
        }
        // for (let i in temp){
        //     console.log(temp[i])
        // }
        return res.json({paper_data: paper_data})
        

    }
    else{
        return res.json({paper_data : "No papers are accessed recently"})
    }
})
app.post("/api/get_saved_papers",async(req,res)=>{
    var saved_paper_content = await saved_papers.findOne({email : req.body.email});
    if(saved_paper_content != null){
        var temp = saved_paper_content.doi
        // console.log(temp);
        var paper_data = []
        for(let i = 0;i<temp.length;i++){
            var t = await Paper.findOne({DOI : temp[i]});
            paper_data.push(t)
        }
        // for (let i in temp){
        //     console.log(temp[i])
        // }
        return res.json({paper_data: paper_data})
        

    }
    else{
        return res.json({paper_data : "No papers are accessed recently"})
    }
})
app.post("/api/sendrequest",async(req,res) =>{
    request_papers.create({
        email : req.body.email,
        DOI : req.body.DOI,
        reason : req.body.reason
            
        },function(err,newu)
        {
            if(err)
            {
                console.log('request not sent');
                return res.json({status : 'error'})
            }
            // this.context.router.transitionTo("/login");
            // res.redirect('http://localhost:3000/login')
            console.log("request sent : ",newu);
            return res.json({status : 'success'})
            //window.location.href('./api/login')
        });
})
app.post("/api/fetchrequestpapers",async(req,res) =>{
    try{
        paperData = await request_papers.find({}, )
        if (paperData.length > 0){
            return res.json({status : paperData})
        }
        else{
            return res.json({status : "You have responded all requests"})
        }
    }
    catch(e){
        return res.json({status : "error"})
    }
    
})
app.listen(1337,() => {
    console.log("server started on 1337")
}) 

