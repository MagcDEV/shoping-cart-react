import { useState } from 'react';
import { Cart } from './componets/Cart';
import Filter from './componets/Filter';
import { Products } from './componets/Products';
import data from './data.json';

const App = () => {
  const [productsList, setProducts] = useState({
    products: data.products,
    cartItems: [],
    size: '',
    sort: '',
  });

  const removeFromCart = (product) => {
    let cartItems = productsList.cartItems.slice();
    cartItems.forEach((item) => {
      if (item._id === product._id & item.count === 1) {
        cartItems = cartItems.filter((element) => (element._id !== product._id))
      } else if (item._id === product._id) {
        item.count--;
      }
    });
    setProducts({
      ...productsList,
      cartItems})
  }

  const addToCart = (product) => {
    const cartItems = productsList.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setProducts({
      ...productsList,
      cartItems,
    });
  };

  const filterProducts = (event) => {
    if (!event.target.value) {
      return setProducts({...productsList, size: '' ,products: data.products });
    }
    setProducts({
      ...productsList,
      size: event.target.value,
      products: data.products.filter((product) =>
        product.availableSizes.includes(event.target.value)
      ),
    });
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts({
      ...productsList,
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
        <a className='hover:text-yellow-700 text-3xl' href='/'>
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
            <Products productsList={productsList} addToCart={addToCart} />
          </div>
          <div className='w-1/4'>
            <Cart cartItems={productsList} removeFromCart={removeFromCart} />
          </div>
        </div>
      </main>
      <footer className='bg-gray-600 h-20 text-white flex justify-center items-center'>
        All right is reserved
      </footer>
    </div>
  );
};

export default App;
