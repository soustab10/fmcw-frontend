/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Classes from './Section.module.css';
import Button from './Button/Button';

function Section(props) {
  return (
    <div className={Classes.section}>
      <h2 className={Classes.section_title}>{props.title}</h2>
      <div className={Classes.row}>
        <div className={Classes.column_1}>
          <p className={Classes.section_content}>{props.children}</p>
          <div className={Classes.section_button}>
            <a href={props.link}>
              <Button>{props.buttonText}</Button>
            </a>
          </div>
        </div>
        <div className={Classes.column_2}>

          <img src={props.imagePath} className={Classes.section_image} />
        </div>
      </div>
    </div>
  );
}
export default Section;
