const mongoose = require("mongoose");
const Joi = require("joi");

const CompanySchema = new mongoose.Schema({
  company_name: { type: String, required: true }, // Partner
  company_phone: { type: String, required: true }, //
  company_address: { type: String, required: true }, //
  company_date_start: { type: Date, required: false, default: Date.now() }, // เริ่ม
});

const Company = mongoose.model("company", CompanySchema);

const validate = (data) => {
  const schema = Joi.object({
    company_name: Joi.string().required().label("กรุณากรอกชื่อบริษัทด้วย"),
    company_phone: Joi.string().required().label("กรุณากรอกเบอร์บริษัทด้วย"),
    company_address: Joi.string()
      .required()
      .label("กรุณากรอกที่อยู่บริษัทด้วย"),
    company_date_start: Joi.date().raw().default(Date.now()),
  });
  return schema.validate(data);
};

module.exports = { Company, validate };
