import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,seDescription]=useState("");
    return <div>
        <input style={{
            padding:10,
            margin:10
        }}
        type="text" placeholder="Enter title" onChange={function(e){
             //const value=e.target.value;
             setTitle(e.target.value);
        }}/><br />
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Enter Description of your task" onChange={function(e){
            //const value=e.target.value;
            seDescription(e.target.value);
       }}/><br />

        <button style={{
            margin:10
        }} onClick={()=>{
           fetch(" http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title:"",
                description:""
            }),
            headers:{
                "contentType":"applications/json"
            }
           })
           .then(async function(params) {
            const json = await res.json();
            alert("Todo Added");
           })
        }}>Add a Todo!!</button>
    </div>
}   