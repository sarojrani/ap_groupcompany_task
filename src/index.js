const mongoose=require('mongoose')
const cors = require("cors")
const EmployeesController=require('./Controllers/EmployeesController')
const CompanyController=require('./Controllers/CompanyController')
const express=require('express')
const app=express()

app.use(express.json())
app.use(cors())

const port=process.env.port||4000

mongoose.connect('mongodb+srv://Suman-1432:Suman1432@cluster0.bkkfmpr.mongodb.net/ApGroupCompanyDB')
.then(()=>console.log('mongoDb is connected'))
.catch((err)=>console.log(err))

app.post('/Employe',EmployeesController.EmployeInfo)
app.post("/login",EmployeesController.login )
app.get('/get-Employe', EmployeesController.getEmployeInfo)
app.put('/employees/:id',EmployeesController.updateEmployeDetail)
app.delete('/employees/:id',EmployeesController.DeleteEmployeDetail)

app.post('/register',CompanyController.registerCompany)
app.get('/get-Company', CompanyController.getCompanyInfo)
app.put('/Company/:id',CompanyController.updateCompanyDetail)
app.delete('/Company/:id',CompanyController.DeleteCompanyDetail)

app.get('/' ,(req,res) => {
  res.send("app is working")
})

app.listen(port,(err)=>{
    if(!err){
        console.log(`connected to port ${port}`)
    }
})

