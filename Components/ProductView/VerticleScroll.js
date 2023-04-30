import styles from './VerticleScroll.module.css';

const VerticleScroll=(props)=>{
    const imgs = props.data.map((img)=>{
        return <img key={Math.random()} src={img} alt='product'></img>
    })
    return(
        <div className={styles.scrollable}>
            <div className={styles.cont}>
                {imgs}
            </div>
        </div>
    );
};
export default VerticleScroll;