"use client";
// import QRCodeStyling from "qr-code-styling";
import React from "react";

export default function QrCode({ url }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Dynamically import qr-code-styling only client-side
    // if (typeof window !== "undefined") {
    import("qr-code-styling").then(({ default: QRCodeStyling }) => {
      const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: url,
        dotsOptions: {
          color: "#cc1b42",
          type: "rounded",
        },
        backgroundOptions: {
          color: "",
        },
      });

      qrCode.append(ref.current);

      console.log("hello");
    });
    // }
  }, [url]);

  //   React.useEffect(()=>{
  //     import("qr-code-styling").then(({ default: QRCodeStyling }) => {
  // const qrCode
  //     })

  //   },[url])

  return (
    <div className="w-full flex items-center justify-center">
      <div ref={ref} />
    </div>
  );
}
