import styles from './QButton.module.css'

const QButton = (props) => {
  return (
    <button onClick={()=>{props.see ? undefined:props.skipIndex()}} className={`${styles.btn} ${props.see ? styles.margin : null}`}>
      {props.see ? 'See Gifts' : 'Skip Question '} 
      {props.see ? null : <img src="/static/images/icons/rightArrow.svg" alt="arrow icon" />}
    </button>
  );
}

export default QButton;
