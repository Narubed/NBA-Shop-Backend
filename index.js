require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/db");
connection();

app.use(express.json());
app.use(cors());

// CALL ME
app.use("/v1/nba-shop/me", require("./routes/pos/me"));
// UPLOAD FILE COLLECTION
app.use(
  "/v1/nba-shop/image/collection",
  require("./routes/pos/uploadfile.collection")
);
// LOGIN
app.use("/v1/nba-shop/login", require("./routes/pos/login"));
app.use("/v1/nba-shop/admin", require("./routes/pos/admin"));
app.use("/v1/nba-shop/employee", require("./routes/pos/employee"));
app.use("/v1/nba-shop/partner", require("./routes/pos/partner"));
app.use("/v1/nba-shop/shop", require("./routes/pos/shop"));
app.use("/v1/nba-shop/company", require("./routes/pos/company"));

app.use("/v1/nba-shop/product/nba", require("./routes/pos/product.nba"));
app.use("/v1/nba-shop/product/shop", require("./routes/pos/product.shop"));

app.use("/v1/nba-shop/preorder/nba", require("./routes/pos/preorder.nba"));
app.use("/v1/nba-shop/preorder/shop", require("./routes/pos/preorder.shop"));
app.use(
  "/v1/nba-shop/preorder/shop-full",
  require("./routes/pos/preorder.shop.full")
);

app.use("/v1/nba-shop/invoice/shop", require("./routes/pos/invoice.shop"));
app.use("/v1/nba-shop/invoice-tax", require("./routes/pos/invoice.tax"));

app.use("/v1/nba-shop/return/product", require("./routes/pos/return.product"));

const port = process.env.PORT || 9030;
app.listen(port, console.log(`Listening on port ${port}...`));
