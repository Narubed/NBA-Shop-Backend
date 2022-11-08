const mongoose = require("mongoose");
const Joi = require("joi");

const DealerSchema = new mongoose.Schema({
  dealer_name: { type: String, required: true },
  dealer_address: { type: String, required: true },
  dealer_phone: { type: String, required: true }, //
  dealer_bookbank: { type: Number, required: true }, //
  dealer_bookbank_number: { type: String, required: true },
  dealer_timestamp: { type: Date, required: false, default: Date.now() },
});

const Dealers = mongoose.model("dealer", DealerSchema);

const validate = (data) => {
  const schema = Joi.object({
    dealer_name: Joi.number().required(),
    dealer_address: Joi.number().required(),
    dealer_phone: Joi.number().required(),
    dealer_bookbank: Joi.number().required(),
    dealer_bookbank_number: Joi.number().required(),
    dealer_timestamp: Joi.date().raw().default(Date.now()),
  });
  return schema.validate(data);
};

module.exports = { Dealers, validate };
