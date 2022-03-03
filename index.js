const express = require('express');
const app = express();
const path = require('path');
const port = 5500;


const db=require('./config/mongoose');
const Contact=require('./models/contact');


app.use(express.urlencoded());
app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//for rendering contact list
app.get('/', function(req,res){
    Contact.find({},function(err,contact){
        if(err){
            console.log('Error in fetching contact from the database');
            return;
        }
        return res.render('home',{
            title:"My Contact List",
            contact_list: contact
        });
    });
});



//function for creating contactlist
app.post('/create-contact', function(req,res){
    Contact.create({
        name:req.body.name,
        phoneno:req.body.phoneno,
        address:req.body.address    
    },function(err,newContact){  //callback function
    if(err){
        console.log('error in creating contact');
        return;
    }
   //console.log('***********',newContact);
    return res.redirect('back');
    });
});


app.get('/delete-contact/', function(req,res){
    //get the id from query in the url
    let id=req.query.id;


    //find contact using id and delete variable

    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting the contact form database');
            return;
        }
        return res.redirect('back');
    });
});



//server listen

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log('Express is running on:',port);
    
});




