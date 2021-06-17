import React from 'react';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

export const Products = (props) => {
  const [modal, setModal] = useState({
    product: null,
  });

  const openModal = (product) => {
    setModal({ product });
  };

  const closeModal = () => {
    setModal({ product: null });
  };

  const { product } = modal;

  return (
    <div>
      <Fade bottom cascade>
        <ul className='flex flex-wrap justify-center items-center m-0 p-0 mb-1 lg:ml-4'>
          {props.productsList.products.map((product) => (
            <li className='md:w-1/3 w-full' key={product._id}>
              <div className=''>
                <a href={'#' + product._id} onClick={() => openModal(product)}>
                  <img
                    className='h-96 mt-4 w-80'
                    src={product.image}
                    alt='product'
                  />
                  <p>{product.title}</p>
                </a>
                <div className='flex  items-center'>
                  <div className='text-center mr-8 text-2xl '>
                    {'$' + product.price}
                  </div>
                  <button
                    onClick={() => props.addToCart(product)}
                    className='text-center bg-yellow-500 hover:bg-yellow-700 rounded font-bold p-1'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button
              className='text-center font-bold bg-gray-300 hover:bg-gray-500 rounded p-1 w-8 absolute right-4 top-10'
              onClick={closeModal}
            >
              X
            </button>
            <div className='flex flex-wrap mr-5 flex-row m-auto w-11/12'>
              <img className='h-96 mt-8' src={product.image} alt='product' />
              <div className='mt-8 ml-4 w-1/2' id='product-details-description'>
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>
                  <strong>{product.description}</strong>
                </p>
                <p className='mt-4'>
                  Available sizes:{' '}
                  {product.availableSizes.map((x) => (
                    <span>
                      {'  '}
                      <button className='text-center font-bold bg-gray-300 hover:bg-gray-500 rounded p-1 w-8'>
                        {x}
                      </button>
                    </span>
                  ))}
                </p>
                <div className='mx-auto mt-8 flex items-center w-5/6 justify-between'>
                  <div className='text-center mr-8 text-2xl'>
                    {'$' + product.price}
                  </div>
                  <button
                    onClick={() => {
                      props.addToCart(product);
                      closeModal();
                    }}
                    className=' w-52 text-center bg-yellow-500 hover:bg-yellow-700 rounded font-bold p-1'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};
