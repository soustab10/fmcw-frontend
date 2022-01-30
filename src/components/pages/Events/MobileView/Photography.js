import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer';
function Photography() {
  return (
    <div style={{ background: '#1D033E', overflow: 'hidden' }}>
      <section className="section">
        <Link to="/events" className="back-btn">
          Back
        </Link>
        <div className="card-container">
          <div className="event-cards">
            {data.photographyData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Photography;
