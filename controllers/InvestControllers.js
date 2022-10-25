import db from "../models/InvestModel.js";
const Invest = db.Invest;

// add Invest
const addInvest = async (req, res) => {
  const id = req.params.id;

  let data = {
    id: id,
    amount: req.body.amount,
    borrowuid: req.body.borrowuid,
    useruid: req.body.useruid, 
    investuid: req.body.investuid,
    date: req.body.date,
  };

  const Invest = await Invest.create(data);
  res.status(200).send(Invest);
};

// get all Invest
const getAllInvest = async (req, res) => {
  const Invests = await Invest.findAll({
    order: [["created_at", "DESC"]],
    include: [
        {
            model: Invest,
            as: "Invest",
          },
    ],
  })
  res.status(200).send(Invests);
};

// get by id Invest
const getOneInvest = async (req, res) => {
    let id = req.params.id;
    let Invest = await Invest.findByPk(id, {
      include: [
        {
          model: Invest,
          as: "Invest",
        },
      ],
    });
    res.status(200).send(Invest);
  };

  // update Invest
  const updateInvest = async (req, res) => {
    let id = req.params.id;
  
    const Invest = await Invest.update(req.body, { where: { id: id } });
    if (Invest.affectedRows === 1) {
      return res.json({ success: true });
    }
  
    res.status(200).send(Invest);
  };

  // delete Invest
const deleteInvest = async (req, res) => {
  let id = req.params.id;

  await Invest.destroy({ where: { id: id } });

  res.status(200).send("Invest is deleted !");
};

module.exports = {
    addInvest,
  getAllInvest,
  getOneInvest,
  updateInvest,
  deleteInvest,
};