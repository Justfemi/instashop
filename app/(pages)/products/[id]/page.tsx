import { products } from '../data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
    <div>
      <h2>{product.name}</h2>
      <Image src={product.imageSrc} alt={product.name} width={600} height={400} />
      <p>Price: #{product.price}</p>
    </div>
  );
};

export default ProductDetails;
