const express = require("express");
const cors= require("cors");


const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());





app.get("/",async(req, res)=>{
    try {
         res.send("server is running!");
    } catch (error) {
         res.status(500).send("something went wrong");
    }
})


app.post("/data",(req,res) => {
   try {
    const {username,password}=req.body

    
    res.status({message:"data is confirmed"},data);
  } catch (error) {
    console.error(200).send("data is ");
    console.log("Post//route in error",error);
  }


});




app.listen(PORT,() => {
       console.log(`server is running http://localhost:,${PORT}`);
});









