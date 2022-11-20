const mongoose = require("mongoose");
const Joi = require("joi");

const ProductNBASchema = new mongoose.Schema({
  productNBA_brand_id: { type: String, required: false, default: "ไม่มี" },
  // เพิ่ม Dealer _id
  productNBA_dealer_id: { type: String, required: false, default: "ไม่มี" },
  productNBA_type: { type: Array, required: false, default: [] },
  productNBA_name: { type: String, required: true }, //
  productNBA_barcode: { type: String, required: false, default: "" },
  productNBA_image: { type: String, required: false, default: "" }, //
  productNBA_cost: { type: Number, required: true }, // dealer ขายให้เรา
  productNBA_price: { type: Number, required: true }, //
  productNBA_profit: {
    nba: { type: Number, required: true },
    platform: {
      level_one: { type: Number, required: true },
      level_two: { type: Number, required: true },
      level_tree: { type: Number, required: true },
      level_owner: { type: Number, required: true },
    },
    terrestrial: {
      district: { type: Number, required: true },
      state: { type: Number, required: true },
      province: { type: Number, required: true },
    },
    shop: { type: Number, required: true },
    bonus: { type: Number, required: true },
    central: { type: Number, required: true },
  },
  productNBA_status: { type: Boolean, required: false, default: true },
  productNBA_status_type: { type: String, required: false, default: "เครดิต" },
  productNBA_detail: { type: String, required: false, default: "" },
  productNBA_stock: { type: Number, required: true }, //
  productNBA_date_start: { type: Date, required: false, default: Date.now() }, // เริ่ม
  productNBA_vat_status: { type: Boolean, required: false, default: true }, // เพิ่ม
  // --------------------------------
});

const ProductNBA = mongoose.model("product_nba", ProductNBASchema);

const validate = (data) => {
  const schema = Joi.object({
    productNBA_brand_id: Joi.string().default("ไม่มี"),
    productNBA_dealer_id: Joi.string().default("ไม่มี"),
    productNBA_type: Joi.array().default([]),
    productNBA_name: Joi.string().required(),
    productNBA_barcode: Joi.string().default(""),
    productNBA_image: Joi.string().default(""),
    productNBA_cost: Joi.number().required(),
    productNBA_price: Joi.number().required(),
    productNBA_profit: Joi.object({
      nba: Joi.number().required(),
      platform: Joi.object({
        level_one: Joi.number().required(),
        level_two: Joi.number().required(),
        level_tree: Joi.number().required(),
        level_owner: Joi.number().required(),
      }),
      terrestrial: Joi.object({
        district: Joi.number().required(),
        state: Joi.number().required(),
        province: Joi.number().required(),
      }),
      shop: Joi.number().required(),
      bonus: Joi.number().required(),
      central: Joi.number().required(),
      // กองทุน
      // โบนัสพนักงาน
    }),
    productNBA_status: Joi.boolean().default(true),
    productNBA_status_type: Joi.string().default("เครดิต"),
    productNBA_detail: Joi.string().default(""),
    productNBA_stock: Joi.number().required(), // default 0
    productNBA_date_start: Joi.date().raw().default(Date.now()),
    productNBA_vat_status: Joi.boolean().default(true),
  });
  return schema.validate(data);
};

module.exports = { ProductNBA, validate };
