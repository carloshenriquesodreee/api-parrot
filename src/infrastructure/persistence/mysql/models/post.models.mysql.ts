import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel ( 'posts', {
    idpost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.DataTypes.STRING,
    iduser: {
        type: Sequelize.DataTypes.INTEGER,
        references:{
            model: "users",
            key: "iduser"
        }
    }
        
});