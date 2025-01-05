import { Provider } from 'react-redux';
import { useState } from 'react';
import store from './store';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import Navigation from './component/Navigation';
import './styles/fonts.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <Provider store={store}>
      <Navigation toggleCart={toggleCart}/>
      <ProductList toggleCart={toggleCart} isCartOpen={isCartOpen}/>
      {isCartOpen && <Cart toggleCart={toggleCart}/>}
    </Provider>
  );
}

export default App;
