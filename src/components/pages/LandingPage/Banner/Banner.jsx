/* eslint-disable react/react-in-jsx-scope */
import Classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={Classes.banner}>
      <img src="/weekennd_herosection-01.svg" className={Classes.image} />
    </div>
  );
}

export default Banner;
