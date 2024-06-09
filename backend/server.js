const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const cors = require("cors");

app.use(cors({ origin: ['http://localhost:5173','https://launrdi-x.netlify.app/'], credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
connectDb();

app.use("/api/orders", require("./routes/ordersRoutes"));
app.use("/api/user", require("./routes/userRoutes")) /
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
