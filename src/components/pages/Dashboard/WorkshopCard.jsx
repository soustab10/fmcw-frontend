/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart';
import Classes from './Events.module.css';
const CardTitle = styled.h2`
  transform: translateZ(55px);
`;
function EventCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const [buttonText, setButtonText] = useState('Next');
  const { addItem, inCart } = useCart();
  const { getItem } = useCart();

  const [open, setOpen] = React.useState(false);
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };
  return (
    <div className={Classes.card}>
      <div className={Classes.card_div}>
        <img src={props.img} alt="unicorn" className={Classes.card_img} />

        <div className={Classes.separator}>
          <div className={Classes.line} />
          <h2>{props.type}</h2>
          <div className={Classes.line} />
        </div>
        <CardTitle className={Classes.workshop_card_title}>{props.title}</CardTitle>
        <h2 className={Classes.prizes}>
          By <b>{props.prize}</b>
        </h2>
      </div>
    </div>
  );
}
EventCard.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  price: 150
};
export default EventCard;
