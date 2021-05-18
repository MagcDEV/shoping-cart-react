import './App.css';

function App() {
  return (
    <div className='grid grid-rows-layout h-screen text-lg'>
      <header className='bg-gray-600 text-white flex items-center p-2'>
        <a className='hover:text-yellow-700' href='/'>
          React Shopping Cart
        </a>
      </header>
      <main className=''>Product List</main>
      <footer className='bg-gray-600 h-20 text-white flex justify-center items-center'>
        All right is reserved
      </footer>
    </div>
  );
}

export default App;
