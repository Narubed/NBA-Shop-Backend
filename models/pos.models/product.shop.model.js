const mongoose = require("mongoose");
const Joi = require("joi");

const ProductShopSchema = new mongoose.Schema({
  productShop_id: { type: String, required: true },
  productShop_name: { type: String, required: false, default: "ไม่มี" }, //
  productShop_barcode: { type: String, required: false, default: "" },
  productShop_image: { type: String, required: false, default: "ไม่มี" }, //
  productShop_cost: { type: Number, required: false, default: 0 }, //
  productShop_price: { type: Number, required: false, default: 0 }, //
  productShop_status: { type: Boolean, required: false, default: true },
  productShop_detail: { type: String, required: false, default: "ไม่มี" }, //
  productShop_stock: { type: Number, required: false, default: 0 }, //
  productShop_type: { type: Boolean, required: false, default: false },
  productShop_nba_id: { type: String, required: false, default: "ไม่มี" },
  // --------------------------------
});

const ProductShop = mongoose.model("product_shop", ProductShopSchema);

const validate = (data) => {
  const schema = Joi.object({
    productShop_id: Joi.string().required(),
    productShop_name: Joi.string().default("ไม่มี"),
    productShop_barcode: Joi.string().default(""),
    productShop_image: Joi.string().default("ไม่มี"),
    productShop_cost: Joi.number().default(0),
    productShop_price: Joi.number().default(0),
    productShop_status: Joi.boolean().default(true),
    productShop_detail: Joi.string().default("ไม่มี"),
    productShop_stock: Joi.number().default(0),
    productShop_type: Joi.boolean().default(false),
    productShop_nba_id: Joi.string().default("ไม่มี"),
  });
  return schema.validate(data);
};

module.exports = { ProductShop, validate };
