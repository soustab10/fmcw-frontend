import './Passes.css';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import Footer from '../../Footer';
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
function Pass(props) {
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
          <NavLink to="/events">
            <img src="/Group7119.svg" className="pass_card" alt="" />
          </NavLink>

          <NavLink to="/events">
            <img src="/Group7124.svg" className="pass_card" alt="" />
          </NavLink>
          <img src="/Group7125.svg" className="pass_card" alt="" />
          <img src="/Group7126.svg" className="pass_card" alt="" />
          <img src="/Group7121.svg" className="pass_card" alt="" />
          <img src="/Group7122.svg" className="pass_card" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Pass;
