const express=require('express');
const app=express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const validator=require('./validator');
const PORT=3000;

app.get('/',(req,res)=>{
      console.log("welcome to server home page");
      res.send("this is home of client");
})

app.post('/add',async(req,res)=>{
    const {num1,num2}=req.body;
    try{
        await validator(num1,num2);
        res.send({
            status:200,
            message:"The sum of given two number ",
            sum:num1+num2,
            author:"vikas"
        })  
    }
    catch(err){
        res.send({
            status:400,
            message:err,
            
        })
    }
})


app.post('/sub',async(req,res)=>{
    const {num1,num2}=req.body;
    try{
        await validator(num1,num2);
        res.send({
            status:200,
            message:"The sum of given two number ",
            sub:num1-num2,
            author:"vikas"
        })  
    }
    catch(err){
        res.send({
            status:400,
            message:err,
            
        })
    }
})


app.post("/multiply",async(req,res)=>{
    const {num1,num2}=req.body;
    try{
        await validator(num1,num2);
        res.send({
            status:200,
            message:"The sum of given two number ",
            multiply:num1*num2,
            author:"vikas"
        })  
    }
    catch(err){
        res.send({
            status:400,
            message:err,
            
        })
    }
})


app.post("/divide",async(req,res)=>{
    const {num1,num2}=req.body;
    try{
        if(num2==0){ 
            throw ("Cannot divide by zero ");
        }
        await validator(num1,num2);
        res.send({
            status:200,
            message:"The sum of given two number ",
            divide:num1/num2,
            author:"vikas"
        })  
       
    }
    catch(err){
        res.send({
            status:400,
            message:err,
            
        })
    }
})

app.listen(PORT,()=>{
    console.log(`app is listening on post = ${PORT}`);
})