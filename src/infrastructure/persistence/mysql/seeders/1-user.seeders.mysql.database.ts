import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('post', [
            {
                "idpost": 1,
                "content": "blablabla",
                "email": "carloshenriquedev@gmail.com",
                "user_id": 1
            },
            {
                "idpost": 2,
                "content": "blablabla",
                "email": "carloshenriquedev@gmail.com",
                "user_id": 2
            },
            {
                "idpost": 3,
                "content": "blablabla",
                "email": "carloshenriquedev@gmail.com",
                "user_id": 3
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('post', {});
    }
};