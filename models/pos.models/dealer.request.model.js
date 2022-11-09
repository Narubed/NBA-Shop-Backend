const mongoose = require("mongoose");
const Joi = require("joi");

const DealerReqSchema = new mongoose.Schema({
  dealerReq_dealer_id: { type: String, required: true },
  dealerReq_brand_id: { type: String, required: true },
  dealerReq_image: { type: Array, required: false, default: [] },
  dealerReq_product_name: { type: String, required: true },
  dealerReq_product_image: { type: String, required: false, default: "" },
  dealerReq_cost: { type: Number, required: false, default: 0 },
  dealerReq_price: { type: Number, required: false, default: 0 },
  dealerReq_status: { type: String, required: false, default: "รอตรวจสอบ" },
  dealerReq_timestamp: { type: Array, required: false, default: [] },
});

const DealerReq = mongoose.model("dealer_request", DealerReqSchema);

const validate = (data) => {
  const schema = Joi.object({
    dealerReq_dealer_id: Joi.string().required(),
    dealerReq_brand_id: Joi.string().required(),
    dealerReq_image: Joi.array().default([]),
    dealerReq_product_name: Joi.string().required(),
    dealerReq_product_image: Joi.string().default(""),
    dealerReq_cost: Joi.number().default(0),
    dealerReq_price: Joi.number().default(0),
    dealerReq_status: Joi.string().default("รอตรวจสอบ"),
    dealerReq_timestamp: Joi.array().default([]), // {name:string, timestamp:Date.now(), remake: มีกิน , note: รายละเอียด}
  });
  return schema.validate(data);
};

module.exports = { DealerReq, validate };
