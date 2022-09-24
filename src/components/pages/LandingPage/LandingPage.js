import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Section from './Section/Section';
import Classes from './LandingPage.module.css';
import Footer from '../../Footer';
import { Button } from '../../Button';
import closeMobileMenu from '../../Navbar';

function landingPage() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };

  return (
    <div className={Classes.landing_page}>
      {/* <h1> Landing Page</h1> */}
      <div className={Classes.login_button}>
        {/* <Button /> */}
        {button && !sessionStorage.getItem('tokenID') && (
          <Button
            isInternalLink
            toLink="/authentication"
            buttonStyle="btn--primary"
            className="nav-links sign">
            SIGN IN
          </Button>
        )}
        {button && sessionStorage.getItem('tokenID') && (
          <Button
            isInternalLink
            toLink="/"
            buttonStyle="btn--primary"
            className="nav-links sign"
            onClick={logoutHandler}>
            SIGN OUT
          </Button>
        )}
      </div>

      <Banner imagePath="/weekennd_herosection-01.svg" />
      <img src="/SECT_DIV_LINE.svg" alt="line" className={Classes.line_sep} />
      <Section
        title="ABOUT US"
        imagePath="/clubs_2X.png"
        buttonText="REGISTER"
        link="/authentication"
        className="about-img">
        <img src="/LINEE.svg" alt="line" className={Classes.about_sep} />
        The long-awaited exemplary 8th edition of FMC Weekend is finally here!
        This time we not only bring to you a plethora of exciting events that
        will put your creative mettle to test, but also some awe-inspiring
        workshops by the notable and established names of the digital arts
        domain, all from the very comfort of your home. As we herald this
        journey, get ready to experience some of the most ecstatic moments of
        your lives as the passion for digital arts conjures within you.
      </Section>

      <Section
        title="EVENTS"
        imagePath="/EVENTSS.png"
        buttonText="KNOW MORE"
        link="/events">
        <img src="/LINEE.svg" alt="line" className={Classes.event_sep} />
        The electrifying eighth edition of FMC Weekend brings to you an
        opportunity to compete with your contemporaries and establish your
        talent. Participate in events of creative writing, photography,
        cinematography, design and animation, discover your true potential and
        watch FMC Weekend truly transform into a celebration of excellence.
      </Section>
      <Footer />
    </div>
  );
}

export default landingPage;
