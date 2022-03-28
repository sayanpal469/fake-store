import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menubar/Menu';
import AllProducts from './components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const AddSetCount = () => {
      setCount(count + 1)
  }

  return (
    <div className='App'>
      <Menu count={count}></Menu>
      <AllProducts addCount={AddSetCount}></AllProducts>
    </div>
  );
}

export default App;
