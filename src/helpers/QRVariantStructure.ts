export default function QRVariantStructure(
  uid: String,
  targetLink: String,
  shortLink: String,
  name: String
) {
  return {
    uid: uid,
    targetLink: targetLink,
    shortLink: shortLink,
    scanCount: 0,
    name: name,
    scanStats: [],
  };
}
