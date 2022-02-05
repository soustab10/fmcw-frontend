import './Passes.css';
import { useCart } from 'react-use-cart';
// import EventCard from './Events/EventCard';
import { NavLink } from 'react-router-dom';
// import { Button } from '../components/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Footer from './Footer';
// import CheckoutButton from './CheckoutButton/CheckoutButton';
// import CartCard_2 from './CartCard_2';
import { useState, useEffect } from 'react';
// import Button from './pages/LandingPage/Section/Button/Button';
// import Button from './Button_2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4
};
function Cart(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (sessionStorage.getItem('isLoggedIn') == 'true') {
      setOpen(true);
    } else {
      alert('Please Sign in first');
    }
  };
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => setOpen(false);
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  useEffect(() => {
    const getCartItems = async () => {
      // setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        const data = await res.json();
        // console.log(data);

        if (data.message === 'success') {
          console.log(data);
          // console.log(data.user.userID.userCart.cartItems);
          if (data.user.userID) {
            setCartItems(data.user.userID.userCart.cartItems);
          } else {
            setCartItems(data.user.userCart.cartItems);
          }
        }
      } catch (e) {
        console.log(e);
        alert('Error with authentication, login again');
      }
    };
    getCartItems();
    // console.log(isTokenValid());
  }, []);

  async function checkoutHandler() {
    let obj = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      amount: paymentAmount,
      redirect_url: 'https://fmcbackend.herokuapp.com/api/pay/callback'
    };
    console.log(obj);

    const res = await fetch('https://fmcbackend.herokuapp.com/api/pay', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log({ obj });
    const data = await res.json();
    console.log(data);
  }
  let paymentAmount = 0;
  for (const item of cartItems) {
    if (item.verifyStatus == false) {
      paymentAmount += item.price;
    }
    if (paymentAmount >= 699) {
      paymentAmount = paymentAmount * 0.9;
    }
  }
  return (
    <div>
      <section className="passes-page">
        <div className="passes-content">
          <h1>Choose To buy passes and save big time!</h1>
          <p>
            Get ready to traverse the arena of digital arts with these exclusive passes that give
            you access to the grand 8th edition of FMC Weekend. We have a range of different passes
            including the super-combo called club passes which give you access to the complete
            package from any chosen category.
          </p>
        </div>
        <div className="pass-img">
          <img src="/Group7130.svg" alt="" />
        </div>
        <div className="pass-cards">
          <img src="/Group7119.svg" className="pass_card" alt="" />
          <img src="/Group7121.svg" className="pass_card" alt="" />
          <img src="/Group7122.svg" className="pass_card" alt="" />
          <img src="/Group7124.svg" className="pass_card" alt="" />
          <img src="/Group7125.svg" className="pass_card" alt="" />
          <img src="/Group7126.svg" className="pass_card" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Cart;
