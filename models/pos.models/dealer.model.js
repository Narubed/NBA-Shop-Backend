const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
  min: 6,
  max: 30,
  lowerCase: 0,
  upperCase: 0,
  numeric: 0,
  symbol: 0,
  requirementCount: 2,
};

const DealerSchema = new mongoose.Schema({
  dealer_name: { type: String, required: true },
  dealer_username: { type: String, required: true }, // เบอร์
  dealer_password: { type: String, required: true },
  dealer_address: { type: String, required: true },
  dealer_phone: { type: String, required: true },
  dealer_status: { type: Boolean, required: false, default: false },
  dealer_status_promiss: {
    type: String,
    required: false,
    default: "ไม่ยอมรับเงื่อนไข",
  }, //
  dealer_bookbank: { type: String, required: false, default: "" }, // images
  dealer_bookbank_number: { type: String, required: true },
  dealer_iden: { type: String, required: false, default: "" }, // images
  dealer_iden_number: { type: String, required: true },
  dealer_timestamp: { type: Array, required: false, default: [] },
});

const Dealers = mongoose.model("dealer", DealerSchema);

const validate = (data) => {
  const schema = Joi.object({
    dealer_name: Joi.string().required(),
    dealer_username: Joi.string().required().label("กรุณากรอกเบอร์ผู้ใช้ด้วย"),
    dealer_password: passwordComplexity(complexityOptions)
      .required()
      .label("dealer_password"),
    dealer_address: Joi.string().required(),
    dealer_phone: Joi.string().required(),
    dealer_status: Joi.string().default(false),
    dealer_status_promiss: Joi.string().required("ไม่ยอมรับเงื่อนไข"), // ไม่ยอมรับเงื่อนไข ยอมรับเงื่อนไข
    dealer_bookbank: Joi.string().default(""),
    dealer_bookbank_number: Joi.string().required(),
    dealer_iden: Joi.string().default(""),
    dealer_iden_number: Joi.string().required(),
    dealer_timestamp: Joi.array().default([]), // {name: ไม่ยอมรับเงื่อนไข, timestamp: Date.now(), remake: ไม่มี, note: ไม่มี}
  });
  return schema.validate(data);
};

module.exports = { Dealers, validate };
