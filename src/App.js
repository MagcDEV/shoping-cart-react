import { useState } from 'react';
import Filter from './componets/Filter';
import { Products } from './componets/Products';
import data from './data.json';

const App = () => {
  const [productsList, setProducts] = useState({
    products: data.products,
    size: '',
    sort: '',
  });

  const filterProducts = (event) => {
    if (!event.target.value) {
      return setProducts({ size: '', products: data.products });
    }
    console.log(event.target.value);
    setProducts({
      products: data.products.filter((product) =>
        product.availableSizes.includes(event.target.value)
      ),
    });
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts({
      sort: sort,
      products: productsList.products
        .slice()
        .sort((a, b) =>
          sort === 'lowest'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'highest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    });
  };

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
            <Filter
              count={productsList.products.length}
              size={productsList.size}
              sort={productsList.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
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
