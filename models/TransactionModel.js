import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Transaction = db.define(  
  "transaction",  
  { 
    id: {  
      type: DataTypes.INTEGER,
      primaryKey : true
    },  
    useruid: {  
      type: DataTypes.INTEGER,  
    },  
    amount: {  
      type: DataTypes.INTEGER,  
    },  
    type: { 
      type: DataTypes.TEXT,  
    },
    transuid: {
        type: DataTypes.INTEGER,
    }, 
    balance: {
        type: DataTypes.INTEGER,
    },
  },  
  {  
    freezeTableName: true,  
  }  
);  
  
(async () => {  
  await db.sync();  
})();  
  
export default Transaction;
