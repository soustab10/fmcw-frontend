import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.h3`
  transform: translateZ(55px);
`;

function SponsorCard(props) {
  return (
    <div className="sponsor-card">
      <div>
        <div className="sponsor_card_img">          
          <img src={props.img} alt="unicorn" className="sponsorcardImg"/>
        </div>
        <CardTitle className="cardTitle">{props.name}</CardTitle>
      </div>

      <h3 className="position">{props.position}</h3>
    </div>
  );
}

export default SponsorCard;
