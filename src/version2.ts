import express from 'express';
import parseData from './parseQuery';
import userInterface from './app_interface/userInfo';


let v2 = express.Router();
let parseInfo = new parseData();

v2.post('/parse',(req,res)=>{
    let userDetails:userInterface = {firstName:'',lastName:'',clientId:''};
    let resolvedUser = parseInfo.parseUser(req.body.data,userDetails,'v2');
    console.log("request is  ",req.body,"   ",resolvedUser);
    res.status(200).send({ data: resolvedUser });
})


module.exports = v2;