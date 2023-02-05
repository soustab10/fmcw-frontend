/* eslint-disable prettier/prettier */
import styles from './Glimps.module.css';
import { Fade } from 'react-reveal';
import redStar from '../../redStar.png';
import rightStar from '../../rightStar.png';
import Footer from '../../Footer';
import first from './1.svg';
import second from './2.svg';
import third from './3.svg';

function GlimpsesCard(props) {
  return (
    <>
      <div className={styles.yearSec}>
        <div className={styles.year} style={{marginTop: props.marginTop}}>{props.year}</div>
        <div className={styles.box} style={{float: props.float}}>
            <h2>{props.header}</h2>
            <p>{props.content}</p>
        </div>
        <div className={styles.imgCont}>
            <img src={props.img} alt="imgcard" />
        </div>
      </div>
    </>
  );
}
export default GlimpsesCard;
