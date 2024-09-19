"use client";
import React from 'react';
import Image from "next/image";
import welcome from "@/app/assets/welcomeShop.png";
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import { CircleCheck } from 'lucide-react';

const Register = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/get-started');
  }

  return (
    <div className='relative flex flex-col items-center justify-center h-screen mx-8'>
      <Image 
        src={welcome}
        alt="welcome art"
        className=''
      />
      <div className="text-center my-8">
        <h2 className='text-4xl'>Welcome</h2>
        <p className='mt-2'>The safest place to shop for online vendors</p>
      </div>
      <div className='px-4 py-3 rounded-[12px] bg-light w-full border-[0.5px] border-outline'>
        <div className='flex items-center gap-2'>
          <CircleCheck className='text-primary' />
          <p className='font-medium text-sm'>Reach million of Shoppers</p>
        </div>
        <div className='flex items-center gap-2 mt-3.5'>
          <CircleCheck className='text-primary' />
          <p className='font-medium text-sm'>Easy Product Listing</p>
        </div>
        <div className='flex items-center gap-2 mt-3.5'>
          <CircleCheck className='text-primary' />
          <p className='font-medium text-sm'>Secure and Fast Payments</p>
        </div>
        <div className='flex items-center gap-2 mt-3.5'>
          <CircleCheck className='text-primary' />
          <p className='font-medium text-sm'>Boost Your Visibility</p>
        </div>
      </div>
      <Button 
        onClick={handleGetStarted}
        className="absolute bottom-4 w-full"
      >
        Get Started
      </Button>
    </div>
  )
}

export default Register