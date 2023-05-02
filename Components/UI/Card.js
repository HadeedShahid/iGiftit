import styles from './Card.module.css';
const Card=(props)=>{
    return (
        <div onClick={props.onClick} className={`${styles.Card} ${props.classes}`}>
            {props.children}
        </div>

    );
};

export default Card