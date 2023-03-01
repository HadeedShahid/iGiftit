import Card from "../UI/Card";
import styles from './CardItem.module.css';
const CardItem=(props)=>{
    let c = 0
    const links = props.links.map((link)=>{
        c+=1;
        return <a href='/' key={c} className={styles.link}>{link.name}</a>
    });
    return (
    <Card classes={`${props.classes} ${styles.cardstyle} ${styles.pad} `}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.wrap}>
            <span className={styles.detail}>{props.detail}</span>
            <div>
                {links}
            </div>
        </div>
    </Card>
    );
}

export default CardItem;