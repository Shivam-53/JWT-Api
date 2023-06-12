require ("dotenv").config()   
const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json())

//console.log(process.env.Secret_token)

app.post("/login",(req,res)=>{
  const data=req.body
  const token=jwt.sign(data,process.env.Secret_token,)
  console.log(process.env.Secret_token)
  console.log(token)
  res.json(token)

})


app.post("/verification",(req,res)=>{
  const bearerToken=req.headers['authorization']
  const bToken=bearerToken.split(" ")
  console.log(bearerToken)
  console.log(bToken[1]);
  const bTokenInString=bToken[1].toString()
  console.log(bTokenInString)
 const verification= jwt.verify(bTokenInString,process.env.Secret_token)
 if(verification.data){
  res.json(verification)
 }
 else{
  res.json("invalid token")
 }
 //console.log(verification)
 

  // res.json(verification)
  // console.log("You are verified to access the page")
})


app.listen(3000,(req,res)=>{
    console.log("Server has started at port 3000 ")
})



