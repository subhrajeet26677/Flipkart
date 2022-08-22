let userrepo=require('../repo/userrepo');

let getusers=async (req,res)=>{
try{
    let result=await userrepo.showusers();
    console.log(result)
    res.send(result)

}
catch(err){
    console.log(err)
    res.send(err);
}
  
}

let adduser= async (req,res)=>{
    let user=req.body;
  
     
    try{
         
          let result=await userrepo.adduser(user);

          if(result=='user exist'){
            res.json({"res":'user aleady exist'})
          }
          else{
            res.json({"res":"data stored successfully "})
            console.log('try compleated in controll')
          }
 
         
         
        
    }
    catch(err){
         res.send('catch error'+err)
         console.log('catch error in control'+err);
    }
}


let login=async (req,res)=>{
    let user=req.body;
    // console.log(user.email);
    // console.log(user.password)
    // console.log(req.email)
     
   
    let validlogin=false;
    try{
        let result=await userrepo.loginuser(user);
        console.log("in login fun"+result);
        if(result.res=='invalid password' || result.res=="invalid email"){
            validlogin=false;
            res.json({"res":result.res,"validlogin":validlogin});
            
        }
        else{
           validlogin=true;
            res.json({"token":result.token,"validlogin":validlogin,"email":user.email,'username':result.username,"usertype":result.usertype,"res":result.res})
         }
      
      
       
    }
    catch(err){
        console.log('error'+err)
        res.send('controller error ooglog'+err);
    }
}

let currentuser=async (req,res)=>{
    let email=req.params.email
  let result= await userrepo.currentuser(email);

  if(result!=null){
      console.log('its woredfdfkdf')
      res.send(result)
  }

  

}

module.exports={getusers,adduser,login,currentuser}