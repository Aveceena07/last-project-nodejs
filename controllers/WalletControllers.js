const db = require("../models");
const Wallet = db.wallet;

// add wallet
const addWallet = async (req, res) => {
  const id = req.params.id;

  let data = {
    id: id,
      userid: req.body.userid,
      balance: req.body.balance,
      date: req.body.date, 
  };

  const wallet = await Wallet.create(data);
  res.status(200).send(wallet);
};

// get all wallet
const getAllWallet = async (req, res) => {
  const wallets = await Wallet.findAll({
    order: [["created_at", "DESC"]],
    include: [
        {
            model: Wallet,
            as: "wallet",
          },
    ],
  })
  res.status(200).send(wallets);
};

// get by id wallet
const getOneWallet = async (req, res) => {
    let id = req.params.id;
    let wallet = await Wallet.findByPk(id, {
      include: [
        {
          model: Wallet,
          as: "wallet",
        },
      ],
    });
    res.status(200).send(wallet);
  };

  // update wallet
  const updateWallet = async (req, res) => {
    let id = req.params.id;
  
    const wallet = await Wallet.update(req.body, { where: { id: id } });
    if (wallet.affectedRows === 1) {
      return res.json({ success: true });
    }
  
    res.status(200).send(wallet);
  };

  // delete wallet
const deleteWallet = async (req, res) => {
  let id = req.params.id;

  await Wallet.destroy({ where: { id: id } });

  res.status(200).send("Wallet is deleted !");
};

module.exports = {
    addWallet,
  getAllWallet,
  getOneWallet,
  updateWallet,
  deleteWallet,
};