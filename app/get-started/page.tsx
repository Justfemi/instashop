"use client";
import React, { useState } from 'react';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GetStarted = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleNext = () => {
    if(step < 3) {
      setStep(step + 1);
    }
  }

  const handleBack = () => {
    if(step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  }

  return (
    <div className='relative flex flex-col h-screen mx-8'>
      <div
        onClick={handleBack}
        className='flex items-start gap-2 cursor-pointer mt-4'
      >
        <ArrowLeft className='text-black text-opacity-60'/>
        <p className='text-black text-opacity-90 font-medium text-base'>Get started</p>
      </div>

      <div className='flex justify-between my-5'>
        <div
          className={`h-1 w-full mr-2 rounded-lg ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`}
        />
        <div
          className={`h-1 w-full mr-2 rounded-lg ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}
        />
        <div
          className={`h-1 w-full rounded-lg ${step === 3 ? 'bg-primary' : 'bg-gray-200'}`}
        />
      </div>

      {step === 1 && (
        <div>
          <h2 className='text-2xl font-medium text-black text-opacity-90'>Enter your phone number or email to get started</h2>
          <p className='mt-4 mb-6 text-sm font-normal text-black text-opacity-60'>We will send you a verification code for confirmation</p>
          <Input 
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter phone number or email"
            className="w-full max-w-md"
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Enter your phone number or email to get started</h2>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Enter your phone number or email to get started</h2>
        </div>
      )}
      <Button
        onClick={handleNext}
        className="absolute bottom-4 w-full"
      >
        Continue
      </Button>
    </div>
  )
}

export default GetStarted