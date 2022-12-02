/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import Classes from './Events.module.css';

import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function EventCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click] = useState(false);
  function change() {
    var elem = document.querySelector('.cart-btn');
    if (elem.value == 'Add') {
      elem.value = 'Added';
    } else {
      elem.value = 'Add';
    }
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
    <Tilt className={Classes.card} options={options}>
      <div className={Classes.card_div}>
        <img src={props.img} alt="unicorn" className={Classes.card_img} />
        <div className={Classes.separator}>
          <div className={Classes.line} />
          <span>{props.type}</span>
          <div className={Classes.line} />
        </div>
        <CardTitle className={Classes.card_title}>{props.title}</CardTitle>
        <h2 className={Classes.prizes}>
          PRIZES WORTH <br></br>
          <b>{props.prize}</b>
        </h2>
        <a href={props.link} target="_blank" className={Classes.btn1} rel="noreferrer">
          {props.ps}
        </a>
      </div>
    </Tilt>
  );
}
EventCard.defaultProps = {
  type: '',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  price: 150
};
export default EventCard;
