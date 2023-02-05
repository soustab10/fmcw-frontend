/* eslint-disable prettier/prettier */
import styles from './Glimps.module.css';
import { Fade } from 'react-reveal';


function GlimpsesCard(props) {
  return (
    <>
      <div className={styles.yearSec}>
        <div className={styles.year} style={{marginTop: props.marginTop}}>{props.year}</div>
        <div className={styles.box} style={{float: props.float}}>
            {/* <img src='Group224.svg' alt='icon' className='up' /> */}
            <h2>{props.header}</h2>
            <p>{props.content}</p>
            {/* <img src='Group7274.svg' alt='icon' className='down' /> */}
        </div>
        <div className={styles.imgCont} style={{float: props.imgfloat}}>
            <img src={props.img} alt="imgcard"  />
        </div>
      </div>
    </>
  );
}
export default GlimpsesCard;
