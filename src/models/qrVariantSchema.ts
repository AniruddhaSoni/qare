import mongoose from "mongoose";

const QrVariantSchema = new mongoose.Schema({
  name: String,
  originalLink: String,
  shortLink: String,
  scanCount: Number,
});

export const QrVariant =
  mongoose.models.qrvariant || mongoose.model("qrvariant", QrVariantSchema);
