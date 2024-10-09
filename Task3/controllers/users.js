import express from "express"

 const sayHello = (req,res) =>{
    res.json({
        mesaage: 'Hello'
    })
} 
 const sayBye = (req,res) =>{
    res.json({
        mesaage: 'Bye'
    })
} 
const nothingToDisplay = (req,res) =>{
    res.json({
        mesaage: 'NothingHere'
    })
}

export {sayHello, sayBye, nothingToDisplay}