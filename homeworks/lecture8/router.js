const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('',async (req,res)=>{
    const {query1, query2} = req.query
    try{
        const response1 =await axios.get(`https://hn.algolia.com/api/v1/search`,{
            params: query1,
            tags: 'story'
        })
        const response2 =await axios.get(`https://hn.algolia.com/api/v1/search`,{
            params: query2,
            tags: 'story'
        })
        const result = {
            [query1]:response1.data.hits.length > 0?{
                created_at:response1.data.hits.created_at,
                title: response1.data.hits.title
            }:{},
            [query2]:response2.data.hits.length > 0?{
                created_at:response2.data.hits.created_at,
                title: response2.data.hits.title
            }:{},}
        res.json(result)
    }catch(error){
        console.error(error)
        res.status(500).send('failed')
    }
})


module.exports = router