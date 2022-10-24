import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Invest = db.define(  
  "invest",  
  { 
    id: {  
      type: DataTypes.INTEGER,
      primaryKey : true
    },  
    amount: {  
      type: DataTypes.INTEGER,  
    },  
    borrowuid: {  
      type: DataTypes.INTEGER,  
    },  
    useruid: { 
      type: DataTypes.INTEGER,  
    },
    investuid: {
        type: DataTypes.INTEGER,
    }, 
    date: {
        type: DataTypes.DATE,
    },
  },  
  {  
    freezeTableName: true,  
  }  
);  
  
(async () => {  
  await db.sync();  
})();  
  
export default Invest;
