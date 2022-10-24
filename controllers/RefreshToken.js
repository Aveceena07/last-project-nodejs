import Users from "../models/UserModel.js";
import Borrows from "../models/BorrowsModel.js";
import wallet from "../models/WalletModel.js";
import Invest from "../models/InvestModel.js";
import Transaction from "../models/TransactionModel.js";
import Forgot from "../models/ForgotModel.js";
import Borrowcrowd from "../models/Borrowcrowd.js";
import Investcrowd from "../models/Investcrowd.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name =  user[0].name;
            const email =  user[0].id;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken});
        });
    } catch (error) {
        console.log(error);
    }
}

