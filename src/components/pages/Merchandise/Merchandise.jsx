import React from 'react';
import TeamCard from '../Team/SponsorSection/TeamCard';
import Footer from '../../Footer';
import './Merchandise.css';

function Merchandise() {
  return (
    <div>
      <section className="merch">
        <TeamCard name="Merch Description" position="Merch" ps="" />
        <TeamCard name="Merch Description" position="Merch" ps="" />
          </section>
      <div className="merch-content">
        <span>More Amazing Merchandise</span>
            <h5>COMING SOON !</h5>
          </div>
      <div className="terms">
        <h2>Terms & Conditions: </h2>
            <h2>Refund policy</h2>
            <ul>
          <li>
            Products are returnable within the applicable return window if you’ve received them in a
            condition that is physically damaged.
          </li>
            <li>
                          For damaged/ defective items, a replacement will be issued which will be delivered in a
                          number of days. The return request has to be placed on the website.
          </li>
            <li>
                          The replacement will be initiated after the originally delivered item is picked up.[/
                          The replacement item will be delivered to you at the time of pick-up.]
          </li>
            <li>
                          Once you raise a request, you'll get an email and SMS confirming that your request is
                          being processed. Based on the item, your request may be automatically approved or you
                          may be contacted for more details. If the request is approved, the item will be picked
                          up after which you will get a replacement.
          </li>
            <li>
                          {' '}
                          We may contact you to ascertain the damage or defect in the product prior to issuing
                          replacement.
          </li>
          <li>
                          The decision of the fest team shall be final and binding.
          </li>
          </ul>
          </div>
      <Footer />
      </div>
  );
}

export default Merchandise;
