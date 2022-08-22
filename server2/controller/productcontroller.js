const productrepo=require('../repo/productrepo');
const productmodel=require('../model/productsmodel');

let getproducts=async (req,res)=>{
    try{
        
        let result=await productrepo.showproducts();
        console.log(result)
      
        res.json(result)
    
    }
    catch(err){
        console.log(err)
        res.send(err);
    }
      
    }


    let findbycatogary=async (req,res)=>{
        let cat=req.params.cat
        try{
            
            let result=await productrepo.findbycatogary(cat)
            console.log(result)
            res.json(result)
        
        }
        catch(err){
            console.log(err)
            res.send(err);
        }
          
        }


      
    
    let addfile= async (req,res,next)=>{
      let product=req.body
       try{
               console.log('try initiated');
               console.log(product)
                    let file= productmodel()
                   file.name=req.body.name;
                   file.cat=req.body.cat;
                   file.price=req.body.price;
                   file.brand=req.body.brand;
                   file.gender=req.body.gender;
                   file.details=req.body.details;
                   file.images=req.body.images;
                   

                   console.log(file +" in controller is here")
   let result=await productrepo.addfile(file);
              console.log(result)
              res.send({res:"success"})
             }
        catch(err){
             res.send('catch error'+err)
             console.log('catch error in control'+err);
        }
    }

    module.exports={addfile,findbycatogary,getproducts}