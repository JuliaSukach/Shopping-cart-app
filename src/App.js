import { Provider } from 'react-redux';
import store from './store';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import './styles/fonts.css'

function App() {
  return (
    <Provider store={store}>
      {/* <Cart/> */}
      <ProductList/>
    </Provider>
  );
}

export default App;
