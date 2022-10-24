import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Borrowcrowd = db.define(  
  "borrowcrowd",  
  { 
    id: {  
      type: DataTypes.INTEGER, 
      primaryKey : true 
    },
    title: {  
        type: DataTypes.TEXT,  
      },  
    descrip: {  
      type: DataTypes.TEXT,  
    },  
    category: { 
      type: DataTypes.TEXT,  
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
    logo: { 
      type: DataTypes.TEXT,  
    }, 
    collect: { 
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
  
export default Borrowcrowd;
