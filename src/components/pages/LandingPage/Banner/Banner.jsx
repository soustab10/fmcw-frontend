/* eslint-disable react/react-in-jsx-scope */
import Classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={Classes.banner}>
      <img src="/HERO-WO-LOGO-011.svg" className={Classes.image} />
      <img src="/mobile-hero-section-02.svg" className={Classes.mobile_hero} />
      <img src="/Group_7139.svg" className={Classes.logo_dates} />
    </div>
  );
}

export default Banner;
