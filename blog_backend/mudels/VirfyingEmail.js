const mongoose = require("mongoose");

const vrefyemailmodel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
   
    token: {
      type: String,
      required: true,
    }
  },
  { timestamps: true,  toJSON: { virtuals: true }, toObject: { virtuals: true } }
);


const virfymodel = mongoose.model("vrefyemail", vrefyemailmodel);


module.exports = virfymodel

