import  investModel from "../models/InvestModel.js"

// add Invest
export const addInvest = async (req, res) => {
  const id = req.params.id;

  let data = {
    id: id,
    amount: req.body.amount,
    borrowuid: req.body.borrowuid,
    useruid: req.body.useruid, 
    investuid: req.body.investuid,
    date: req.body.date,
  };

  const invest = await investModel.create(data);
  res.status(200).send(invest);
};

// get all Invest
export const getAllInvest = async (req, res) => {
  const Invests = await investModel.findAll()
  res.status(200).send(Invests);
};

// get by id Invest
export const getOneInvest = async (req, res) => {
    let id = req.params.id;
    let Invest = await investModel.findByPk(id);
    res.status(200).send(Invest);
  };

  // update Invest
  export const updateInvest = async (req, res) => {
    let id = req.params.id;
  
    const Invest = await investModel.update(req.body, { where: { id: id } });
    if (Invest.affectedRows === 1) {
      return res.json({ success: true });
    }
  
    res.status(200).send(Invest);
  };

  // delete Invest
  export const deleteInvest = async (req, res) => {
  let id = req.params.id;

  await investModel.destroy({ where: { id: id } });

  res.status(200).send("Invest is deleted !");
};