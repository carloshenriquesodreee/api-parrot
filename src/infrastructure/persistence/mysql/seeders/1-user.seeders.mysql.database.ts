import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('posts', [
            {
                "idpost": 1,
                "content": "blablabla",
                "iduser": 1
            },
            {
                "idpost": 2,
                "content": "blablabla",
                "iduser": 2
            },
            {
                "idpost": 3,
                "content": "blablabla",
                "iduser": 3
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('posts', {});
    }
};