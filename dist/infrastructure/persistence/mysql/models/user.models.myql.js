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
exports.default = mysql_database_1.MysqlDatabase.getInstance().createModel('users', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbHMubXlxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9tb2RlbHMvdXNlci5tb2RlbHMubXlxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWtEO0FBQ2xELHFEQUF1QztBQUV2QyxrQkFBZSw4QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBRyxPQUFPLEVBQUU7SUFDOUQsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztRQUNqQyxVQUFVLEVBQUUsSUFBSTtRQUNoQixhQUFhLEVBQUUsSUFBSTtLQUN0QjtJQUNBLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDaEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNqQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO0lBQ3RDLFFBQVEsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07Q0FFeEMsQ0FBQyxDQUFDIn0=