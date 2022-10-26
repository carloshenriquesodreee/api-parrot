import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel ( 'users', {
    iduser: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
     name: Sequelize.DataTypes.STRING,
     email: Sequelize.DataTypes.STRING,
     apartment: Sequelize.DataTypes.INTEGER,
     password: Sequelize.DataTypes.STRING
        
});
