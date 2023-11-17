import mongoose from "mongoose";

const QrVariantSchema = new mongoose.Schema({
  uid: String,
  targetLink: String,
  shortLink: String,
  scanCount: Number,
  name: String,
  scanStats: Array,
});

export const QrVariant =
  mongoose.models.qrVariant || mongoose.model("qrVariant", QrVariantSchema);
