import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel ( 'post', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'iduser'
    },
     name: Sequelize.DataTypes.STRING,
     email: Sequelize.DataTypes.STRING,
     apartment: Sequelize.DataTypes.INTEGER,
     password: Sequelize.DataTypes.STRING,
     createdAt: Sequelize.DataTypes.DATE,
     updatedAt: Sequelize.DataTypes.DATE
        
});
