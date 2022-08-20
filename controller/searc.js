import express from 'express'
import database from '../dataBase/connectDb.js'


const router = express.Router()




router.get('/search/:keyword', (req, res) => {

    

    res.send('search kelukas veikia')
})


export default router