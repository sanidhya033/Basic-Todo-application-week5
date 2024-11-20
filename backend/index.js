const express = require('express');
const {createTodo} = require("./types");
const {updateTodo} = require("./types");
const {todo} = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo",async function(req,res){
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"You send Wrong inputs",
    })
    return;
   }
   // now push this to mongo db
   await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false

   })// wait for todo to be created then show the mssg todo created
   // in case the database is down so it will throw an exception 
   // if u not use await even if the database is down it will show todo created
   res.json({
    msg:"Todo created"
   })

});

app.get("/todo", async function(req,res){
     
        const todos = await todo.find({});// empty gives all todos 
        //we used await because this will take some time to gather data 
        // if we dont use await todos is a promise that eventually it will have data in it
        res.json({
            todos
        });
});

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    console.log(updatePayload);
    const parsedPayload =updateTodo.safeParse(updatePayload);
    console.log(parsedPayload);
    if(!parsedPayload.success){
     res.status(411).json({
         msg:"You send Wrong inputs",
     })
     return;
    }

    await todo.update({
        _id:req.body.id// in moongodb there is an auto generated id as _id for each part of dataf
    },{
        completed:true
    })
   res.json({
    msg:"Todo Mark as completed"
   })
});

app.listen(3000);