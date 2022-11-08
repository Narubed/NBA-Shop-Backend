const mongoose = require("mongoose");
const Joi = require("joi");

const ProductShopSchema = new mongoose.Schema({
  productShop_id: { type: String, required: true },
  productShop_name: { type: String, required: false, default: "ไม่มี" }, // ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
  productShop_barcode: { type: String, required: false, default: "" }, // ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
  productShop_image: { type: String, required: false, default: "ไม่มี" }, // ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
  productShop_cost: { type: Number, required: false, default: 0 }, // ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
  productShop_price: { type: Number, required: false, default: 0 }, // ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
  productShop_status: { type: Boolean, required: false, default: true }, //
  productShop_detail: { type: String, required: false, default: "ไม่มี" }, //  ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
  productShop_stock: { type: Number, required: false, default: 0 }, //
  productShop_type: { type: Boolean, required: false, default: false },
  productShop_nba_id: { type: String, required: false, default: "ไม่มี" },
  productShop_vat_status: { type: Boolean, required: false, default: true }, //  ถ้าเป็นสินค้า NBA ไม่ต้องเพิ่ม
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
    productShop_vat_status: Joi.boolean().default(true), // เพิม
  });
  return schema.validate(data);
};

module.exports = { ProductShop, validate };
