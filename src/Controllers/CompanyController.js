const CompanyModel=require('../Models/CompenyModel')

const registerCompany = async(req,res)=>{
    try{
    let data=req.body
    console.log(data)
    

    const createData=await CompanyModel.create(data)
    // console.log(createData)
    if(createData){
    return res.status(201).send({status:true,data:createData})
    }
    else{
        return res.status(404).send({result:'no result found'})
    }
    }
    
    catch(err){
   return res.status(500).send({status:false,message:err})
    }
   
}
const getCompanyInfo=async(req,res)=>{
    try {
        let getData=await CompanyModel.find()
        if(getData.length>0){
            return res.status(200).send(getData)
        }
        else{
            return res.status(404).send({result:'no result found'})
        }

        
    } catch (err) {
        return res.status(500).send({status:false,message:err}) 
    }
}
const updateCompanyDetail=async(req,res)=>{
    try{
        
        let result = await CompanyModel.updateOne(
            { _id: req.params.id },
            { $set: req.body },{new:true}
        )
        return res.status(200).send(result)
        }
        catch(err){
            return res.status(500).send({status:false,message:err})
        }
}
const DeleteCompanyDetail=async(req,res)=>{
    try{
        
        let result = await CompanyModel.deleteOne(
            { _id: req.params.id },
            
        )
        return res.status(200).send(result)
        }
        catch(err){
            return res.status(500).send({status:false,message:err})
        }
}

module.exports={registerCompany,getCompanyInfo,updateCompanyDetail,DeleteCompanyDetail}