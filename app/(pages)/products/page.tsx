"use client";
import React from 'react';
import { ArrowLeft, Check, EllipsisVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from './data';
import Link from 'next/link';

const Product = () => {
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
          <p className='text-black text-opacity-90 font-medium text-base'>Products</p>
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

      <div className='m-4'>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className='mb-6'>
              <div className='relative w-full h-72'>
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  // priority
                  layout="fill"
                  className='w-full h-full object-cover rounded-[12px]'
                  loading='lazy'
                />
              </div>
              <div className='py-2'>
                <div>
                  <h4 className='text-sm font-medium'>{product.name}</h4>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <h3 className='text-xl font-medium text-[#3B3B3B]'>#{product.price}</h3>
                    <span className='text-sm text-[#ACACAC] font-medium'>#{product.originalPrice}</span>
                    <div className='bg-primary rounded-[24px] px-1.5 py-0.5'>
                      <p className='text-white font-normal text-xs'>{product.discount}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <Image
                      src={product.ratingSrc}
                      alt='rating star'
                      priority
                      width={100}
                      height={40}
                    />
                    <p className='text-sm text-[#ACACAC] font-normal'>({product.sold} sold)</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Product