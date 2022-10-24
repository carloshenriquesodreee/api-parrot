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
const Sequelize = __importStar(require("sequelize"));
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable('posts', {
            idpost: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            content: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'iduser'
                }
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('post');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMjEwMjQyMzU1LXBvc3QubWlncmF0aW9ucy5teXNxbC50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9taWdyYXRpb25zLzIwMjIxMDI0MjM1NS1wb3N0Lm1pZ3JhdGlvbnMubXlzcWwudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUV2QyxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsYUFBYSxFQUFFLElBQUk7YUFDdEI7WUFDRCxPQUFPLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ25DLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNuQyxNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsVUFBVSxFQUFFO29CQUNSLEtBQUssRUFBRTt3QkFDSCxTQUFTLEVBQUUsT0FBTztxQkFDckI7b0JBQ0QsR0FBRyxFQUFFLFFBQVE7aUJBQ2hCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQy9DLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0osQ0FBQSJ9