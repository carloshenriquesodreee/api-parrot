"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_database_1 = require("../mysql.database");
const Sequelize = __importStar(require("sequelize"));
exports.default = mysql_database_1.MysqlDatabase.getInstance().createModel('posts', {
    idpost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.DataTypes.STRING,
    iduser: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: "users",
            key: "iduser"
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5tb2RlbHMubXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbW9kZWxzL3Bvc3QubW9kZWxzLm15c3FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBa0Q7QUFDbEQscURBQXVDO0FBRXZDLGtCQUFlLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFHLE9BQU8sRUFBRTtJQUM5RCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ2pDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNuQyxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ2pDLFVBQVUsRUFBQztZQUNQLEtBQUssRUFBRSxPQUFPO1lBQ2QsR0FBRyxFQUFFLFFBQVE7U0FDaEI7S0FDSjtDQUVKLENBQUMsQ0FBQyJ9