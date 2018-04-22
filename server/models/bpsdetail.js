var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BPSDetailSchema = new Schema({
  PersonOID: String,
  MerchantNumber: String,
  MerchantName: String,
  L12MVolume: Number,
  L12MTxns: Number,
  L12MActualMargin: Number,
  L12MAvgTicket: Number,
  L12MBasisPts: Number
}, {
  collection: 'bpsdetail'
});

var BPSDetail = mongoose.model("BPSDetail", BPSDetailSchema);
module.exports = BPSDetail;