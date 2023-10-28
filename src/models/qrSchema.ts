import mongoose from "mongoose";

const QrSchema = new mongoose.Schema({
  name: String,
  qrCodes: Array,
});

export const QRs = mongoose.models.qrs || mongoose.model("qrs", QrSchema);
