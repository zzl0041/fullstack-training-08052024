const express = require('express')
const router = express.Router()
const URL = require('url')
const fs = require('fs')
const path = require('path')

router.get('/:dir/:ext',(req,res)=>{
    const dir = req.params.dir
    const extension = req.params.ext
    const folderPath = path.join(__dirname, dir)
    if(!folderPath || !extension){
        res.status(400).send('do not have correct format')
    }
    fs.readdir(folderPath, (err,files)=>{
        if(err){
            res.status(400).send('not have files')}
        const result = files.filter(file=> path.extname(file) === `.${extension}`) 
        if(result.length ===0){
            res.status(400).send('no files')
        }
        res.json(result)
    }) 
})

module.exports = router;