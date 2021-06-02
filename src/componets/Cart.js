import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

export const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState({
    name: '',
    email: '',
    address: '',
    showCheck: false,
  });
  const { cartItems } = props.cartItems;

  const handleInput = (e) => {
    e.preventDefault();
    setShowCheckout({ ...showCheckout, [e.target.name]: e.target.value });
  };

  const createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: showCheckout.name,
      email: showCheckout.email,
      address: showCheckout.address,
      cartItems,
    };
    props.createOrder(order);
  };
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
        <Fade left cascade>
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
        </Fade>
        <div>
          TOTAL: ${' '}
          {cartItems.reduce(
            (total, currentPrice) =>
              total + currentPrice.price * currentPrice.count,
            0
          )}
          <button
            onClick={() =>
              setShowCheckout({ ...showCheckout, showCheck: true })
            }
            className='ml-8 text-center bg-yellow-500 hover:bg-yellow-700 p-2 w-32'
          >
            Proceed
          </button>
        </div>
      </div>
      {showCheckout.showCheck && (
        <div className='w-full mt-4'>
          <form>
            <ul className='space-y-2'>
              <li className='space-x-2'>
                <label>Email:</label>
                <input
                  className='border py-2 px-3 text-grey-darkest'
                  type='email'
                  name='email'
                  required
                  onChange={handleInput}
                ></input>
              </li>
              <li className='space-x-2'>
                <label>Name:</label>
                <input
                  className='border py-2 px-3 text-grey-darkest'
                  type='text'
                  name='name'
                  required
                  onChange={handleInput}
                ></input>
              </li>
              <li className='space-x-2'>
                <label>Address:</label>
                <input
                  className='border py-2 px-3 text-grey-darkest'
                  type='text'
                  name='address'
                  required
                  onChange={handleInput}
                ></input>
              </li>
              <li>
                <button
                  onClick={createOrder}
                  type='submit'
                  className='ml-8 text-center bg-yellow-500 hover:bg-yellow-700 p-2 w-32'
                >
                  Checkout
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
};
