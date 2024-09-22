"use client";
import React, { useState } from 'react';
import { ArrowLeft, Check, ChevronDown, ChevronUp, EllipsisVertical, ImagePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';

const CreateProduct = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean[]>([true, true, true]);

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

  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    price: '',
    oldPrice: '',
    collection: '',
    stocks: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSaveProduct = () => {
    router.push('/products');
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

          <div onClick={() => toggleOpen(0)} className='cursor-pointer'>
            {isOpen[0] ? (
              <ChevronUp className='text-black text-opacity-60' />
            ) : (
              <ChevronDown className='text-black text-opacity-60' />
            )}
          </div>
        </div>
        
        {isOpen[0] && (
          <div className='mx-4'>
            <Input 
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              placeholder="Product title"
              className="w-full max-w-md"
            />

            <textarea 
              className='p-3 border-[0.5px] border-black w-full max-w-md border-opacity-30 mt-3 rounded-[12px] h-20 focus:outline-none focus:ring-0.5 focus:ring-primary focus:border-primary'
              placeholder='Product description'
              name='description'
              value={formValues.description}
              onChange={handleChange}
            ></textarea>

            <div className='flex items-center gap-3 mt-2 w-full'>
              <Input 
                type="text"
                name="price"
                value={formValues.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-1/2"
              />

              <Input 
                type="text"
                name="oldPrice"
                value={formValues.oldPrice}
                onChange={handleChange}
                placeholder="Old Price"
                className="w-1/2"
              />
            </div>

            <textarea 
              className='p-3 border-[0.5px] border-black w-full max-w-md border-opacity-30 mt-3 rounded-[12px] h-20 focus:outline-none focus:ring-0.5 focus:ring-primary focus:border-primary'
              placeholder='Product collection'
              name='collection'
              value={formValues.collection}
              onChange={handleChange}
            ></textarea>

            <Input 
              type="text"
              name="stocks"
              value={formValues.stocks}
              onChange={handleChange}
              placeholder="Inventory stocks"
              className="w-full max-w-md mt-2"
            />
          </div>
        )}
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-between px-4 mb-4'>
          <p className='text-black text-sm font-medium'>Product images</p>

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
            <div className='flex items-center justify-center p-2.5 rounded-full gap-2 text-primary bg-btngray w-full'>
              <p className='font-medium text-sm'>Add Image</p>
              <ImagePlus size={20} />
            </div>
          </div>
        )}
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-start px-4 mb-4'>
          <p className='text-black text-sm font-medium'>Inventory varaition</p>
        </div>

        <div className='px-4 flex items-center gap-2'>
          <input type="checkbox" />
          <p className='text-black text-opacity-60 text-sm font-normal'>
            This product is variable; has different colors, sizes, weight, materials, etc.
          </p>
        </div>
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-between px-4 mb-4'>
          <p className='text-black text-sm font-medium'>Shipping</p>

          <div onClick={() => toggleOpen(2)} className='cursor-pointer'>
            {isOpen[2] ? (
              <ChevronUp className='text-black text-opacity-60' />
            ) : (
              <ChevronDown className='text-black text-opacity-60' />
            )}
          </div>
        </div>

        {isOpen[2] && (
          <div className='px-4'>
            <div className='flex items-center justify-between mr-3 mb-6'>
              <p className='text-black text-opacity-90 text-xs font-normal'>Self shipping</p>
              <input 
                type="checkbox"
              />
            </div>

            <div className='flex items-center justify-between mr-3'>
              <p className='text-black text-opacity-90 text-xs font-normal'>InstaShop shipping</p>
              <input 
                type="checkbox"
              />
            </div>
          </div>
        )}
      </div>

      <div className='border-t border-black border-opacity-10 pt-5 pb-1 mt-5'>
        <div className='flex items-center justify-between gap-2 px-4 mb-4'>
          <button className='p-2.5 bg-white text-primary border border-primary font-medium rounded-full shadow-sm w-full'>
            Cancel
          </button>
          <Button 
            className='w-full'
            onClick={handleSaveProduct}
          >
            Save
          </Button>
        </div>
      </div>

    </div>
  )
}

export default CreateProduct