import React from 'react';

export const Products = (props) => {
  return (
    <div>
      <ul className='flex flex-wrap justify-center items-center m-0 p-0 mb-1'>
        {props.productsList.products.map((product) => (
          <li className='md:w-1/4 w-full' key={product._id}>
            <div className=''>
              <a href={'#' + product._id}>
                <img className=' h-80 mt-4' src={product.image} alt='product' />
                <p>{product.title}</p>
              </a>
              <div className='flex  items-center'>
                <div className='text-center  mr-8 text-2xl '>
                  {'$' + product.price}
                </div>
                <button className='text-center bg-yellow-500 hover:bg-yellow-700 rounded font-bold p-1'>
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
