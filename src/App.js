import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import ProductProvider from './Context/ProductProvider';

function App() {
  return (
    <div className="App">
      <ProductProvider>
      <RouterProvider router={router}>
        
      </RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
