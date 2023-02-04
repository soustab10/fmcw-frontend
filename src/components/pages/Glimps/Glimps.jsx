/* eslint-disable prettier/prettier */
import styles from './Glimps.module.css';
import { Fade } from 'react-reveal';
import redStar from '../../redStar.png';
import rightStar from '../../rightStar.png';
import Footer from '../../Footer';
import first from './1.svg';
import second from './2.svg';
import third from './3.svg';

function Glimps() {
  return (
    <>
      <div className={styles.mainHeading}>
        <div className={styles.heading}>
          <Fade right>
            {/* <img src='Group_7167.svg' /> */}

            <img className="star1" src={rightStar}></img>

            <span className="heading">TIMELINE</span>

            <img className="star2" src={redStar}></img>
          </Fade>
        </div>
      </div>
      <div>
        <div>
          <Fade left>
            <img className={styles.line} src={first}></img>
          </Fade>
        </div>
        <div>
          <Fade right>
            <img className={styles.line} src={second}></img>
          </Fade>
        </div>
        <div>
          <Fade left>
            <img className={styles.line} src={third}></img>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Glimps;
