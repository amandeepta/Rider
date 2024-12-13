require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const http = require("http");
const app = express();
const port = process.env.PORT || 3000;

const createRider = require("./routes/createRide");
const searchRider = require("./routes/searchRide");
const getInfo = require("./routes/getInfo");
app.use(cors({
  origin:true,  // Replace with your frontend domain
  methods: ['GET', 'POST'],                // Allow specific HTTP methods (GET, POST, etc.)
  allowedHeaders: ['Content-Type'],        // Allow Content-Type header for sending data
  credentials: true                        // Allow cookies and credentials if needed
}));

app.use(express.json());

app.use(createRider);
app.use(searchRider);
app.use(getInfo);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

dbConnect();