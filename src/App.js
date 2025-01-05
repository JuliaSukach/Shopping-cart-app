import { Provider } from 'react-redux';
import store from './store';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import Navigation from './component/Navigation';
import './styles/fonts.css'

function App() {
  return (
    <Provider store={store}>
      {/* <Cart/> */}
      <Navigation/>
      <ProductList/>
    </Provider>
  );
}

export default App;
