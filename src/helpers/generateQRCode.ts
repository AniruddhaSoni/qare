import { ConnectMongoDB, DisconnectMongoDB } from "@/lib/mongoose";
import { QR } from "@/models/qrSchema";
import { QrVariant } from "@/models/qrVariantSchema";
import { Users } from "@/models/userSchema";
import { randomUUID } from "crypto";
import QRVariantStructure from "./QRVariantStructure";

export async function GenerateQR(
  uid: String,
  targetLink: string,
  variantCount: number
) {
  const QRid = randomUUID().replaceAll("-", "");
  const qrVariantIDArray = [];
  const qrVariantArray = [];
  let qrOutput = [];

  await ConnectMongoDB();
  await Users.findOne({ uid: uid }).then(async (userData) => {
    userData.qrs.push(QRid);
    await userData.save();

    await QR.create({
      QRid: QRid,
      uid: uid,
      targetLink: targetLink,
      qrVariants: [],
      totalScans: 0,
      scanStats: [],
    })
      .then(async (qrData) => {
        for (let i = 0; i < variantCount; i++) {
          let qrVariantShortLink = randomUUID().replaceAll("-", "");
          qrVariantIDArray.push(qrVariantShortLink);

          qrVariantArray.push(
            QRVariantStructure(
              uid,
              targetLink,
              qrVariantShortLink,
              `variant-${i + 1}`
            )
          );
        }

        QrVariant.insertMany(qrVariantArray).then((data) => {
          qrOutput = data;
        });

        qrData.qrVariants = qrVariantIDArray;
        await qrData.save();

        // console.log(qrVariantIDArray);
      })
      .catch(async (err) => {
        userData.qrs.pull(QRid);
        // await userData.save();
        console.log("error occur", QRid);
      });
  });
  await DisconnectMongoDB();

  console.log(qrOutput);

  return qrOutput;
}
