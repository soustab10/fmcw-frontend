/* eslint-disable prettier/prettier */
import styles from './Glimps.module.css';
import { Fade } from 'react-reveal';
import redStar from '../../redStar.png';
import rightStar from '../../rightStar.png';
import Footer from '../../Footer';
import first from './1.svg';
import second from './2.svg';
import GlimpsesCard from './GlimpsesCard';
import third from './3.svg';
import data from './GlimpsesData'

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
      <section className={styles.section1}>
      
      <div className={styles.line}></div>
      
    <Fade bottom>
      {data.glimpsesData.map((item, index) => {
        return (
        <GlimpsesCard key={index} year={item.year} img={item.img} imgfloat={item.imgfloat} content={item.content} marginTop={item.marginTop} float={item.float} yearCol={item.yearCol} />
        )
      })}
      </Fade>
      </section>
      <Footer className={styles.footer1} />
    </>
  );
}
export default Glimps;
