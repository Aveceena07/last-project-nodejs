import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Investcrowd = db.define(  
  "investcrowd",  
  { 
    id: {  
      type: DataTypes.INTEGER,
      primaryKey : true
    },  
    amount: {  
      type: DataTypes.INTEGER,  
    },  
    useruid: {  
      type: DataTypes.INTEGER,  
    },  
    borrowuid: { 
      type: DataTypes.INTEGER,  
    },
    date: {
        type: DataTypes.DATE,
    }, 
    investuid: {
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
  
export default Investcrowd;
