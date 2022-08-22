const usermodel = require("../model/usermodel");
let bcrypt=require('bcryptjs')
let jwt=require('jsonwebtoken');


let showusers=()=>{
    return usermodel.find();
}


let adduser= async (user)=>{
    let result=await usermodel.findOne({email:user.email});
    if(result==null){
        console.log('repo adduser executed');
        let salt=await bcrypt.genSalt(10);
        let hashpass=await bcrypt.hash(user.password,salt);
     
        let userref=new usermodel({
            username:user.username,
            password:hashpass,
            email:user.email,
            usertype:user.usertype
     
        })
     
        console.log(user);
     
        return usermodel.insertMany(userref)
    }
    else{
        return 'user exist'
    }
 
}


let loginuser=async (user)=>{
     let result=await usermodel.findOne({email:user.email});
      
     console.log("result in repo"+result)

     if(result==null){
           return {"res":'invalid email'}
     }
      

     let validpassword=await bcrypt.compare(user.password,result.password);

     if(!validpassword){
         return {"res":'invalid password'}
     }
     let payload={id:result._id,email:result.email,usertype:result.usertype};
     let token=await jwt.sign(payload,'batman');
     return {"res":"success","token":token,'username':result.username,'email':result.email,"usertype":result.usertype};
}    


let currentuser=(email)=>{
    return usermodel.findOne({email:email});
}

module.exports={showusers,adduser,loginuser,currentuser};