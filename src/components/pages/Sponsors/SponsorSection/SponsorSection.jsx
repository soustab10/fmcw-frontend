/* eslint-disable react/react-in-jsx-scope */
import Card from './Card';
import classes from './SponsorSection.module.css';

function SponsorSection(props) {
  return (
    <div>
      <div className={classes.sponsor_title} id="sponsor_1">
        <div className={classes.cards}>
          <Card
            img="/LAPCARE_LOGO.png"
            name="Lapcare"
            sponsor="Powered-by Sponsor"
            site="https://www.lapcare.com/"
          />
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_2">
        <div className={classes.cards}>
          <Card
            img="/Giottus-logo.png"
            name="Giottus Technologies"
            sponsor="Crypto Trading Partner"
            site="https://giottus.com/"
          />
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_3">
        <div className={classes.cards}>
          <Card
            img="/Billionbooks-Official-Logo_(1).svg"
            name="Billionbooks"
            sponsor="Book Reading Partner"
            site="https://thebillionbooks.store/"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
