const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drink = require("./drink");
const options = { discriminatorKey: "type" };

const liquorSchema = new Schema(
  {
    typeOfLiquor: {
      type: String
    }
  },
  options
);

module.exports = Liquor = Drink.discriminator("Liquor", liquorSchema);