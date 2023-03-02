const employeesModel=require('../Models/EmployeesModel')
const jwt=require('jsonwebtoken')

const EmployeInfo = async(req,res)=>{
    try{
    let data=req.body
    console.log(data)
    // const [Fname , Lname,Company, Email, Phone]=req.body

    const createData=await employeesModel.create(data)
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

const login = async function (req, res) {
    try {
        let { email, password } = req.body  // Destructuring

        // if (!keyValue(req.body)) return res.status(400).send({ status: false, msg: "Please provide email and password!" })  // 3rd V used here

        if (!email) return res.status(400).send({ status: false, msg: "email is not correct!" })    // Email Validation
        if (!password) return res.status(400).send({ status: false, msg: "password is not correct!" })   // Passsword Validation

        let user = await employeesModel.findOne({ email: email, password: password })    // DB Call

        if (!user) { return res.status(404).send({ status: false, msg: "email or the password is invalid!" }) }


        let token = jwt.sign(                         // JWT Creation
            {
                userId: user._id.toString(),
              project: "BackendTask",
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + 48 * 60 * 60
            },
            "Ap_Group_Company"              // Secret Key 
        )
        
        return res.status(201).send({ status: true, data: token })
    }
    catch (err) {
        console.log("This is the error:", err.message)
        return res.status(500).send({ status: false, msg: err.message })
    }
}



const getEmployeInfo=async(req,res)=>{
    try {
        let getData=await employeesModel.find()
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
const updateEmployeDetail=async(req,res)=>{
    try{
        
        let result = await employeesModel.updateOne(
            { _id: req.params.id },
            { $set: req.body },{new:true}
        )
        return res.status(200).send(result)
        }
        catch(err){
            return res.status(500).send({status:false,message:err})
        }
}
const DeleteEmployeDetail=async(req,res)=>{
    try{
        
        let result = await employeesModel.deleteOne(
            { _id: req.params.id },
            
        )
        return res.status(200).send(result)
        }
        catch(err){
            return res.status(500).send({status:false,message:err})
        }
}

module.exports={EmployeInfo,login,getEmployeInfo,updateEmployeDetail,DeleteEmployeDetail}