/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import './events.css';
// import { Button } from '@mui/material';
// import unicorn from "./assets/test.png";
import styled from 'styled-components';
import Tilt from 'react-tilt';
// import addToCart from './CartModal';

import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function EventCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const { addItem, inCart } = useCart();
  const { getItem } = useCart();
  const handleClick = () => {
    setClick(!click);
  };
  function change() {
    var elem = document.querySelector('.cart-btn');
    if (elem.value == 'Add') {
      elem.value = 'Added';
    } else {
      elem.value = 'Add';
    }
  }

  async function addItemToCart(item) {
    // console.log('yash');
    const userID = sessionStorage.getItem('userID');
    // e.preventDefault();
    let obj = {
      userID: userID,
      cartItem: item
    };
    
    const res = await fetch('https://fmcw-deployedp.herokuapp.com/api/cart', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log({ obj });
    console.log(JSON.stringify(obj));
    const data = await res.json();
    console.log(data);

    if (data.status=="Success") {
      addItem(item);
    } else {
      alert('Unable to add item to cart! Try again later');
    }

    // post not working because status isn't upadated in data.js;

    //only for show purposed
    // window.location.href = "/register";
  }

  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };
  return (
    <Tilt className="card" options={options}>
      <div className="card-div">
        <img src={props.img} alt="unicorn" className="card-img" />
        <h3>₹ {props.price}</h3>
        {sessionStorage.getItem('isLoggedIn') == 'true' && (
          <button
            className="cart-btn"
            onClick={() => {
              // send post request to database

              addItemToCart(props.item);
              // addItem(props.item);

              // change();
            }}
            disabled={inCart(props.item.id)}>
            {inCart(props.item.id) ? 'Added' : 'Add'}
            {inCart(props.item.id) ? '' : <img src="/add-cartPURPLE_OLD_1.svg" />}
          </button>
        )}
        <div className="separator">
          <div className="line" />
          <h2>{props.type}</h2>
          <div className="line" />
        </div>
        <CardTitle className="card-title">{props.title}</CardTitle>
        <h2 className="prizes">
          PRIZES WORTH <br></br>
          <b>{props.prize}</b>
        </h2>
        <a href={props.link} target="_blank" className="btn1" rel="noreferrer">
          {props.ps}
        </a>
      </div>
    </Tilt>
  );
}
EventCard.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  price: 150
};
export default EventCard;
