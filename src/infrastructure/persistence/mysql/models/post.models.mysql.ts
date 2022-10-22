import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel ( 'post', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpost'
    },
    content: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
    user_id: Sequelize.DataTypes.INTEGER,
        
});