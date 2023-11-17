import mongoose from "mongoose";

const QrSchema = new mongoose.Schema({
  QRid: String,
  uid: String,
  targetLink: String,
  qrVariants: Array,
  totalScans: Number,
  scanStats: Array,
});

export const QR = mongoose.models.qrs || mongoose.model("qrs", QrSchema);
