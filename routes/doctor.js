const express = require('express')
const router = express.Router();


// router.get('/login' , (req,res)=>{
//     res.render('login')
// })

router.get('/Index' , (req,res)=>{
    res.render('doctor/Index')
})

router.get('/Appointments' , (req,res)=>{
    res.render('doctor/Appointments')
})

router.get('/Patients' , (req,res)=>{
    res.render('doctor/Patients')
})

router.get('/Profile' , (req,res)=>{
    res.render('doctor/Patients')
})

router.get('/Notes' , (req,res)=>{
    res.render('doctor/Notes')
})


module.exports = router;