import React from 'react'
import Image from "next/image";
 
const Generated = () => {
  return (
    <div className='flex flex-row justify-center'>
       <div>
       <Image
            src={"/images/home/qr.png"}
            height={128}
            width={128}
            alt="qare"
          />
       </div>
    </div>
   
  )
}

export default Generated