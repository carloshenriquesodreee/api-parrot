import *as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('users',[
            {
                "iduser":1,
                "name": "John",
                "email": "carlos@gmail.com",
                "apartment":2,
                "password": "euruasjkas",
                
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface)=>{
        return queryInterface.bulkDelete('users',{})
    }
}