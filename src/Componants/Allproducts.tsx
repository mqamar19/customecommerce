// components/Allproducts.tsx

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface HomeProps {
  products: Product[];
}

const Allqproducts: FC<HomeProps> = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
    <div className='Productswrapper flex'>
    <ul className='flex'>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              
                <Image priority={false} // {false} | {true}
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Allqproducts;