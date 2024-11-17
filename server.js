const express = require("express");
const app = express();
const auth = require("./auth/user.js");
const userRouter = require("./routers/users.js");
const parkingSlotRouter = require("./routers/parkingslots.js");
const bookingRouter = require("./routers/bookslot.js");
const paymentRouter = require("./routers/payment.js");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
// app.use(express.json({ limit: "100000000" }));
// app.use(express.limit(100000000));
app.use("/user", userRouter);
app.use("/parking", parkingSlotRouter);
app.use("/book", bookingRouter);
app.use("/payment", paymentRouter);

app.get("/test",(req,res)=>{
  res.send("Working!!")
})

app.get("/",(req,res)=>{
  res.send("Park Capsule")
})

const ConnectDB = require("./config/db");
ConnectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
