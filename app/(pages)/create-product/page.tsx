"use client";
import React from 'react';
import { ArrowLeft, Check, ChevronDown, EllipsisVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CreateProduct = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center justify-between mt-4 mx-4'>
        <div
          onClick={handleBack}
          className='flex items-center gap-2 cursor-pointer'
        >
          <ArrowLeft className='text-black text-opacity-60' size={20} />
          <p className='text-black text-opacity-90 font-medium text-base'>Create a product</p>
        </div>

        <EllipsisVertical className='text-black text-opacity-60'/>
      </div>

      <div className='flex items-center justify-between m-4'>
        <div 
          className='flex items-center rounded-[90px] gap-2 border border-black border-opacity-10 px-1 py-0.5 text-black text-opacity-60'
        >
          <p className='text-xs font-normal'>Draft</p>
          <Check size={15} />
        </div>

        <div>
          <p className='text-primary text-xs font-medium'>Preview product</p>
        </div>
      </div>

      <div className='border-t border-black border-opacity-10'>
        <div className='flex items-center justify-between my-4 px-4'>
          <p className='text-black text-sm font-medium'>Basic details</p>

          <ChevronDown className='text-black text-opacity-60' />
        </div>

        
      </div>

    </div>
  )
}

export default CreateProduct