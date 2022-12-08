const express = require('express')
const router = express.Router();

router.get('/' , (req,res)=>{
    res.render('login')
})

router.get('/login' , (req,res)=>{
    res.render('login')
})

router.get('/About' , (req,res)=>{
    res.render('About')
})

router.get('/Guide' , (req,res)=>{
    res.render('Guide')
})



module.exports = router;