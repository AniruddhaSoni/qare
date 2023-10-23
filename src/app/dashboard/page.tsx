"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import '../../components/Generated';
import { useState } from 'react';
import Generated from '../../components/Generated';


const page = () => {

  const [isGeneratedQR, setIsGeneratedQR] = useState(false);

  const handleButtonClick = () => {
    setIsGeneratedQR(!isGeneratedQR);
    console.log('clicked');
  };
  return (
    <div>
      <div className='flex items-center justify-center'>
      <div className='pb-2 font-mono font-black text-3xl align-center text-stone-100 text-center'>
        <h1>Generate your own <b className='text-rose-700 text-3xl'>QAre</b> with us</h1>
        </div>
      </div>
        
        <div className='flex items-center justify-center mt-5'>
          <li className='flex flex-row gap-5'>
            <ul><Button variant="outline">URL</Button></ul>
            <ul><Button variant="outline">YouTube</Button></ul>
            <ul><Button variant="outline">EMail</Button></ul>
            <ul><Button variant="outline">Text</Button></ul>
            <ul><Button variant="outline">Wi-fi</Button></ul>
            <ul><Button variant="outline">Number</Button></ul>
          </li>
        </div>
        <div className='flex items-center justify-center mt-5'>
        <div className=' w-1/2'>
        <Input placeholder="https://"/>
        <div className='flex items-center justify-center mt-5'>
        <Button onClick={handleButtonClick}>Generate</Button>
        </div>
        <div className='flex item-center justify-center'>{isGeneratedQR && <Generated />}</div>
        </div>
        </div>

        <div className=''></div>
    </div>
    
  )
}

export default page