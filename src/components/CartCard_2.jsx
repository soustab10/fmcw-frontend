/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './CartCard_2.css';

import styled from 'styled-components';
import Tilt from 'react-tilt';

import CloseIcon from '@mui/icons-material/Close';
import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function CartCard_2(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const { addItem, inCart } = useCart();
  const { getItem } = useCart();
  async function onDelete(mongooseId) {
    const userID = sessionStorage.getItem('userID');
    let obj = {
      userID: userID,
      itemId: mongooseId
    };

    window.location.reload();
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
        <img
          src={props.img}
          alt="unicorn"
          className={props.type == 'Contest' ? 'card-img' : 'workshop-card-img'}
        />
        {props.type == 'Contest' ? <h3>₹ {props.price}</h3> : ''}
        {!props.verified && (
          <button
            className="cart-btn"
            onClick={() => {
              onDelete(props.mongooseId);
            }}>
            <CloseIcon />
          </button>
        )}
        <div className="separator">
          <div className="line" />
          <h2>{props.type}</h2>
          <div className="line" />
        </div>
        <CardTitle className="card-title">{props.title}</CardTitle>
        <h2 className="prizes">{props.type == 'Contest' ? 'PRIZES WORTH' : 'By'}</h2>
        <h2 style={{ fontSize: '1.2em' }}>{props.prize}</h2>
        <a href={props.link} target="_blank" className="btn1" rel="noreferrer">
          {props.ps}
        </a>
      </div>
    </Tilt>
  );
}
CartCard_2.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: '',
  price: 150
};
export default CartCard_2;
