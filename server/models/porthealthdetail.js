var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PHDetailSchema = new Schema({
  PersonOID: String,
  AccountNumber: String,
  MerchantName: String,
  Status: String,
  Months: Number,
  ActualMargin: Number,
  EstimatedMargin: Number,
  SalesEquity: Number
}, {
  collection: 'phdetail'
});

var PHDetail = mongoose.model("PHDetail", PHDetailSchema);
module.exports = PHDetail;