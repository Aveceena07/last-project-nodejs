import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/UserRouter.js";
import bodyParser from "body-parser";
import koneksi from "./config/Db.js";
dotenv.config();
// const koneksi = require("./config/database");
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


import borrow from "./routes/BorrowsRouter.js";
app.use("/api/borrow", borrow);
import invest from "./routes/InvestRouter.js";
app.use("/api/invest", invest);
import wallet from "./routes/WalletRouter.js";
app.use("/api/wallet", wallet);
import user from "./routes/UserRouter.js";
app.use("/api/user", user);


const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// create data / insert data
app.post("/api/crowdinvest", (req, res) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO users SET ?";

  // jalankan query
  koneksi.query(querySql, data, (err, rows, field) => {
    // error handling
    if (err) {
      return res
        .status(500)
        .json({ message: "Gagal insert data!", error: err });
    }

    // jika request berhasil
    res.status(201).json({ success: true, message: "Berhasil insert data!" });
  });
});

// read data / get data
app.get("/api/crowdinvest", (req, res) => {
  // buat query sql
  const querySql = "SELECT * FROM user";

  // jalankan query
  koneksi.query(querySql, (err, rows, field) => {
    // error handling
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }

    // jika request berhasil
    res.status(200).json({ success: true, data: rows });
  });
});

// update data
app.put("/api/crowdinvest/:id", (req, res) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySearch = "SELECT * FROM users WHERE id = ?";
  const queryUpdate = "UPDATE users SET ? WHERE id = ?";

  // jalankan query untuk melakukan pencarian data
  koneksi.query(querySearch, req.params.id, (err, rows, field) => {
    // error handling
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query update
      koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
        // error handling
        if (err) {
          return res.status(500).json({ message: "Ada kesalahan", error: err });
        }

        // jika update berhasil
        res
          .status(200)
          .json({ success: true, message: "Berhasil update data!" });
      });
    } else {
      return res
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
});

// delete data
app.delete("/api/crowdinvest/:id", (req, res) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM users WHERE id = ?";
  const queryDelete = "DELETE FROM users WHERE id = ?";

  // jalankan query untuk melakukan pencarian data
  koneksi.query(querySearch, req.params.id, (err, rows, field) => {
    // error handling
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query delete
      koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
          return res.status(500).json({ message: "Ada kesalahan", error: err });
        }

        // jika delete berhasil
        res
          .status(200)
          .json({ success: true, message: "Berhasil hapus data!" });
      });
    } else {
      return res
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
});
