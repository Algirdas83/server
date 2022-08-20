
import express from 'express'
import search from './controller/searc.js'

const app = express()

// Leidzia nodotis vidiniais failais css, js 
app.use('/publick', express.static('publick'))

//Leidzia perduoti req.body
app.use(express.urlencoded({
    extended:true
}))




// Routu dalis

app.use(search)





app.listen(3000)