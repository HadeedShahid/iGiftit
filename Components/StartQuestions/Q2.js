import styles from './Q2.module.css'
// import classes from './Q1.module.css'
const Q2=(props)=>{
    return (
        <div className={styles.cont}>
            <div className={styles.question}>Is there something specific that the person you’re shopping for is really passionate about ?</div>
            <div className={styles.optclass}>
                <input className={styles.inp} type='text' placeholder='Like One DIrection, K-POP etc'></input>
                <div className={styles.inpclass}>
                    <span className={styles.option}>or select from the following</span>
                    <div>
                        <button className={styles.opt}>One Direction</button>
                        <button className={styles.opt}>K-Pop</button>
                        <button className={styles.opt}>Maroon 5</button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
export default Q2;