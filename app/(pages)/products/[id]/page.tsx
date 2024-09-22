import { products } from '../data'; 
import { notFound } from 'next/navigation';
import ProductClient from '@/app/components/ProductClient';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetails = ({ params }: ProductDetailProps) => {
  const product = products.find((prod) => prod.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className='flex flex-col h-screen'>
      <ProductClient product={product} />
    </div>
  );
};

export default ProductDetails;
