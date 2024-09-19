"use client";
import React, { useState } from 'react';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import google from "@/app/assets/google.svg";
import tiktok from "@/app/assets/tiktok.svg";
import instagram from "@/app/assets/instagram.svg";

const GetStarted = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [value, setValue] = useState('');
  const [formValues, setFormValues] = useState({
    fullName: '',
    username: '',
    phoneNumber: '',
    email: ''
  });

  const handleChangeFirstStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
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
            onChange={handleChangeFirstStep}
            placeholder="Enter phone number or email"
            className="w-full max-w-md"
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className='text-2xl font-medium text-black text-opacity-90'>Complete profile setup</h2>
          <p className='mt-4 text-sm font-normal text-black text-opacity-60'>Connect your socials for quick setup</p>
          <div className='flex items-center gap-2 my-6'>
            <div className='flex-1 bg-black bg-opacity-5 rounded-[12px] h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-10'>
              <Image 
                src={instagram}
                alt='instagram icon'
                priority
              />
            </div>

            <div className='flex-1 bg-black bg-opacity-5 rounded-[12px] h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-10'>
              <Image 
                src={tiktok}
                alt='tiktok icon'
                priority
              />
            </div>

            <div className='flex-1 bg-black bg-opacity-5 rounded-[12px] h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-10'>
              <Image 
                src={google}
                alt='google icon'
                priority
              />
            </div>
          </div>
          <p className='text-sm font-normal text-black text-opacity-60 mb-4'>Or enter manually</p>
          <Input 
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full max-w-md"
          />

          <Input 
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full max-w-md mt-3"
          />

          <Input 
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full max-w-md mt-3"
          />

          <Input 
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full max-w-md mt-3"
          />
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