import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CartProvider } from 'react-use-cart';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <AuthContextProvider>
        <App />
        <ToastContainer
        draggable={true}
        toastClassName="toast-style"
        toastStyle={{ backgroundColor: '#FCC907', color: '#1D033E', fontWeight: 'bold' }}
      />
      </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
