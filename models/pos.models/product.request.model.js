const mongoose = require("mongoose");
const Joi = require("joi");

const ProductReqSchema = new mongoose.Schema({
  productReq_shop_id: { type: String, required: true },
  productReq_name: { type: String, required: true },
  productReq_image: { type: String, required: false, default: "" },
  productReq_cost: { type: Number, required: true },
  productReq_price: { type: Number, required: true },
  productReq_profit: { type: Number, required: true },
  productReq_status: { type: Boolean, required: false, default: false },
  productReq_vat_status: { type: Boolean, required: false, default: false },
  productReq_timestamp: { type: Date, required: false, default: Date.now() },
});

const ProductReq = mongoose.model("product_request", ProductReqSchema);

const validate = (data) => {
  const schema = Joi.object({
    productReq_shop_id: Joi.string().required(),
    productReq_name: Joi.string().required(),
    productReq_image: Joi.string().default(""),
    productReq_cost: Joi.number().required(),
    productReq_price: Joi.number().required(),
    productReq_profit: Joi.number().required(),
    productReq_status: Joi.boolean().default(true),
    productReq_vat_status: Joi.boolean().default(true),
    productReq_timestamp: Joi.date().raw().default(Date.now()),
  });
  return schema.validate(data);
};

module.exports = { ProductReq, validate };
