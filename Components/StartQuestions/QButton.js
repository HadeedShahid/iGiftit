import styles from './QButton.module.css'

const QButton = (props) => {
  return (
    <button className={`${styles.btn} ${props.see ? styles.margin : null}`} onClick={props.onClick}>
      {props.see ? 'See Gifts' : 'Skip Question '} 
      {props.see ? null : <img src="/static/images/icons/rightArrow.svg" alt="arrow icon" />}
    </button>
  );
}

export default QButton;
