import mysql from 'mysql2/promise'
import { Sequelize } from 'sequelize'
import Websites from '../model/searcMod.js'


const dataBase = {}

const credentials = {
    host:'localhost',
    user: 'root',
    password: '',
    database:'tetra'
}


try {

    const connection = await mysql.createConnection({
        host:credentials.host,
        user: credentials.user,
        password: credentials.password,
        database:credentials.database
    })
    
    const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password,{
        
        dialect: 'mysql'
    } )
    
    dataBase.Websites = Websites(sequelize)
    
    await sequelize.sync({alter:true})



} catch(error)  {

    console.log(error)
    console.log('Nepavyko su duombaze pacanai');
    
}














export default dataBase