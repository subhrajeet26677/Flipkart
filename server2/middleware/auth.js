let jwt=require('jsonwebtoken');
let verifytoken= async (req,res,next)=>{
    let token=req.headers.authorization;
    if(!token){
        console.log('illigal attempt')
        res.send('illegal attempt')
    }
    try{
        let verifiedtoken= await jwt.verify(token,'batman');
        if(!verifiedtoken){
            res.send('unauthorized user attempt');
        }else{
            next()
        }
        //
    }
    catch(err){
      //  res.send('token auth error \n'+err)
    }
}

//is admin check
let isAdimn= async (req,res,next)=>{
    console.log(req);
     if(req.usertype=="Admin"){
         console.log('authorized admin')
         next()
     }else{
         res.send('unauthorized user');
     }
 }

 let isuser=async (req,res,next)=>{
    console.log(req.usertype);
    if(req.usertype=="user"){
       
        console.log('authorized normal  user');

        next();
    }else{
        res.send('anauthorized user, you cant accessthis resourse')
    }
}


module.exports={isAdimn,verifytoken,isuser}