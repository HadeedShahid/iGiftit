import styles from './LandingpageCard.module.css'


const LandingpageCard=(props)=>{
   
    return (
        <div data-aos={props.dataaos} className={`${styles.card} ${props.classes}`}>
            <div className={styles.top}>
                <img src={`/static/images/landingpage/${props.image}`}></img>
                <div>{props.title}</div>
            </div>
            <div className={styles.link}>
                <a><img src="/static/images/landingpage/arrow.svg"></img></a>
            </div>
        </div>
    );
}
export default LandingpageCard