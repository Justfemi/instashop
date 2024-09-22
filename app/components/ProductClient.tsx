/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, EllipsisVertical, Heart, ChevronDown, ChevronUp, Dot, Users, Star} from 'lucide-react';
import arrow from '@/app/assets/arrow.svg';
import photo from '@/app/assets/uploadphoto.svg';
import Button from './Button';

interface ProductClientProps {
  product: {
    imageSrc: string;
    name: string;
    price: number;
    originalPrice: number;
    ratingSrc: string;
    sold: number;
    discount: number;
  };
}

const ProductClient = ({ product }: ProductClientProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean[]>([true, true]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOpen = (index: number): void => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleBack = () => {
    router.back();
  }

  const text = `Wholesale and drop shipping are both welcomed. 
  For wholesale, we offer discounts or free express shipping, which only takes 3-7 days to arrive. 
  For drop shipping, we can send the goods directly to your customers without leaving any information about us if you'd like. 

  How can I track my parcel? 
  You can track your parcel on the following website using your tracking number: www.17track.net/en (copy to the browser to open). 

  What can I do when the purchase protection time is running out? 
  If your purchase protection time is running out, please contact us, and we can help you extend it so your money will not go to my account.`;

  const displayedText = isExpanded ? text : text.slice(0, 200) + '...';

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center justify-between m-4'>
        <div
          onClick={handleBack}
          className='flex items-center gap-2 cursor-pointer'
        >
          <ArrowLeft className='text-black text-opacity-60' size={20} />
          <p className='text-black text-opacity-90 font-medium text-base'>Product preview</p>
        </div>

        <EllipsisVertical className='text-black text-opacity-60' />
      </div>
      <Image src={product.imageSrc} alt={product.name} width={600} height={400} />
      <div className='flex items-center justify-between p-4'>
        <h4 className='text-sm font-medium'>{product.name}</h4>

        <div className='flex items-center gap-2'>
          <div className='flex items-center justify-center w-9 h-9 rounded-full bg-black bg-opacity-5'>
            <Image
              src={arrow}
              alt='forward arrow'
            />
          </div>

          <div className='flex items-center justify-center w-9 h-9 rounded-full bg-black bg-opacity-5'>
            <Heart size={15} className='text-black text-opacity-60'/>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between px-4'>
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
      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5 px-4'>
        <div className='flex items-center justify-start mb-4'>
          <p className='text-black text-sm font-medium'>Select variants</p>
        </div>
        <p className='text-xs text-black text-opacity-60 mb-2'>Size: SMALL</p>
        <div className='flex items-center gap-2 flex-wrap mt-3'>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-90 text-white text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
        </div>

        <p className='text-xs text-black text-opacity-60 mt-4 mb-2'>Color: White</p>
        <div className='flex items-center gap-2 flex-wrap mt-3'>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
          <button 
            className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
          >Filter</button>
        </div>
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-between px-4 mb-4'>
          <p className='text-black text-sm font-medium'>Product description</p>

          <div onClick={() => toggleOpen(0)} className='cursor-pointer'>
            {isOpen[0] ? (
              <ChevronUp className='text-black text-opacity-60' />
            ) : (
              <ChevronDown className='text-black text-opacity-60' />
            )}
          </div>
        </div>

        {isOpen[0] && (
          <div className='px-4'>
            <div className=''>
              <p className='text-black text-opacity-70 text-xs font-normal'>{displayedText}</p>
              <p 
                className='mt-2 text-xs text-primary font-medium'
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Read less' : 'Read more' }
              </p>
            </div>
          </div>
        )}
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-between px-4 mb-4'>
          <p className='text-black text-sm font-medium'>About this vender</p>

          <div onClick={() => toggleOpen(1)} className='cursor-pointer'>
            {isOpen[1] ? (
              <ChevronUp className='text-black text-opacity-60' />
            ) : (
              <ChevronDown className='text-black text-opacity-60' />
            )}
          </div>
        </div>

        {isOpen[1] && (
          <div className='px-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='w-12 h-12'>
                  <Image 
                    src={photo}
                    alt='vendor profile picture'
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>

                <div>
                  <p className='text-black text-sm font-medium'>Gucci Store</p>
                  <div className='flex items-center text-black text-opacity-70 text-xs font-normal'>
                    <p className=''>Fashion</p>
                    <Dot />
                    <div className='flex items-center gap-0.5'>
                      <Star size={13} className='text-opacity-90' />
                      <p className=''>5.4</p>
                    </div>
                    <Dot />
                    <div className='flex items-center gap-0.5'>
                      <Users size={13} className='text-opacity-90' />
                      <p className=''>100k</p>
                    </div>
                  </div>
                </div>
              </div>

              <div> <p className='text-xs text-primary font-medium'>Follow</p> </div>
            </div>

            <div className='my-2'>
              <p className='text-black text-opacity-70 text-xs font-normal'>
                Vendor description: You can track your parcel on the following website using your tracking number: www.17track.net/en  (Copied to the browser to open)
                What can I do when purchase protection time is running out?
              </p>
            </div>

            <div className='flex items-center gap-2 flex-wrap mt-3'>
              <button 
                className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
              >Quality goods</button>
              <button 
                className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
              >Nice design</button>
              <button 
                className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
              >Quality goods</button>
              <button 
                className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
              >Nice design</button>
              <button 
                className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
              >Quality goods</button>
              <button 
                className='py-0.5 px-2 rounded-[90px] bg-black bg-opacity-5 text-black text-opacity-90 text-sm'
              >Nice design</button>
            </div>
          </div>
        )}
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-center px-4 mb-4'>
          <Button 
            className='w-full'
            // onClick={handleSaveProduct}
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductClient
