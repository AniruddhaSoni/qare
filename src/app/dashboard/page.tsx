"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import QRCode from 'qrcode';
import Generated from '../../components/Generated';

const Page = () => {
  const [isGeneratedQR, setIsGeneratedQR] = useState(false);
  const [inputValues, setInputValues] = useState(['', '']);
  const [qrData, setQrData] = useState('');
  const [addField, setAddField] = useState(1);

  const handleButtonClick = async () => {
    if (inputValues.every((value) => value)) {
      try {
        const qrDataURL = await QRCode.toDataURL(inputValues[0]);
        setQrData(qrDataURL);
        setIsGeneratedQR(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Both fields should be filled');
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };


  const handleAddition = () => {
    setAddField(addField + 1);
    setInputValues([...inputValues, inputValues[0], '']); 
  }



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

      {[...Array(addField)].map((_, index) => (
        <div key={index} className='flex items-center justify-center gap-5'>
          <Input
            className='w-1/2'
            type='text'
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="https://"
          />
          <Input placeholder='Names' className='w-1/4' />
          {index === addField - 1 && (
            <Button onClick={handleAddition} className='mt-10 bg-stone-200 text-stone-900' style={{ borderRadius: '200px' }}>+</Button>
          )}
        </div>
      ))}

      <div className='flex items-center justify-center'>
        <Button onClick={handleButtonClick} className='mt-10'>Generate</Button>
        <div className='flex item-center justify-center'>{isGeneratedQR && <Generated />}</div>
      </div>
    </div>
  )
}

export default Page;
