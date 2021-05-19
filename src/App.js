import { useState } from 'react';
import { Products } from './componets/Products';
import data from './data.json';

const App = () => {
  const [productsList, setProducts] = useState({
    products: data.products,
    size: '',
    sort: '',
  });
  return (
    <div className='grid grid-rows-layout grid-cols-1 text-lg'>
      <header className='bg-gray-600 h-20 text-white flex items-center p-2'>
        <a className='hover:text-yellow-700' href='/'>
          React Shopping Cart
        </a>
      </header>
      <main>
        <div className='flex flex-wrap'>
          <div className='w-3/4'>
            <Products productsList={productsList} />
          </div>
          <div className='w-1/4'>Cart Items</div>
        </div>
      </main>
      <footer className='bg-gray-600 h-20 text-white flex justify-center items-center'>
        All right is reserved
      </footer>
    </div>
  );
};

export default App;
