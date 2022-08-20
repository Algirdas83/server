import sequelize from 'sequelize'
import {DataTypes} from 'sequelize'


const Websites =(sequelize) => {

  const  Schema =  {

        title:{
            type:DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }

    }

    return sequelize.define('website', Schema)
}

export default Websites