import React from 'react';

export const Cart = (props) => {
  const { cartItems } = props.cartItems;
  console.log(props.cartItems.length);
  return (
    <div className='flex flex-wrap p-4 m-4'>
      {cartItems.length === 0 ? (
        <div className='border-b-4 pb-4 w-full'>Cart is empty</div>
      ) : (
        <div className='border-b-4 pb-4 w-full'>
          You have {cartItems.length} in the cart{' '}
        </div>
      )}
      <div className='w-full mt-4'>
        <ul>
          {cartItems.map((item) => (
            <li className='flex' key={item._id}>
              <div className='p-2'>
                <img className='w-32 h-32' src={item.image} alt='product' />
              </div>
              <div className='text-right'>
                <div>{item.title}</div>
                <div className=''>
                  {'$' + item.price} x {item.count}{' '}
                  <button
                    className='text-center bg-gray-300 hover:bg-gray-500 rounded p-1'
                    onClick={() => props.removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div> 
          TOTAL: $ {cartItems.reduce((total, currentPrice) => total + (currentPrice.price * currentPrice.count), 0)}
          <button className="ml-8 text-center bg-yellow-500 hover:bg-yellow-700 p-2 w-32">Proceed</button>
        </div>
      </div>
    </div>
  );
};
