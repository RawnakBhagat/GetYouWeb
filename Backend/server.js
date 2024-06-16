const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./route/router");
const contactRouter = require("./route/contact");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/contact", contactRouter);

mongoose.connect("mongodb+srv://rawnakstudy:rawnak@cluster0.tom8qav.mongodb.net/Getyourweb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
