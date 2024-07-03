const userRouter=require("./routes/user")

const express=require("express")

const app=express()
app.get("/",(req,res)=>{
    console.log("hello express")
    res.send("hello")
})

app.use("/user",userRouter)

app.listen(3000,console.log("server running"))