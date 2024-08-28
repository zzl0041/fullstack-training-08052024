const express = require('express')
const router = express.Router()
const URL = require('url')

router.get('/parsetime',(req,res)=>{
    const url = URL.parse(req.url, true)
    const query = url.query.iso
    if(query){
        const date = new Date(query)
        const result = {
            hour:date.getHours(),
            minute: date.getMinutes(),
            second:date.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    }else{
        res.status(400).json({error:"invalid"})
    }
})

router.get('/unixtime',(req,res)=>{
    const url = URL.parse(req.url, true)
    const query = url.query.iso
    if(query){
    const date = new Date(query)
    const result = {
        time: date.getTime()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))}
    else{
        res.status(400).json({error:"invalid"})
    }
})

module.exports = router;