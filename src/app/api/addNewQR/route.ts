import { GenerateQR } from "@/helpers/generateQRCode";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const requestData = await req.json();

  let data = await GenerateQR(
    requestData.uid,
    requestData.targetUrl,
    requestData.variantCount
  );

  return Response.json(data);
}
