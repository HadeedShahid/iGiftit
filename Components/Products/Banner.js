import styles from './Banner.module.css';
import Button from '../UI/Button';
const Banner=(props)=>{
    const image = props.image;
    return(
        <div className={`${styles.wrapper} ${props.class}`}>
            <img className={styles.mainImg} src={image} alt='Banner img'></img>
            <div className={styles.ContentWrapper}>
                <div className={styles.BannerText}>Beautiful Gift Baskets for your loved ones</div>
                <Button class={styles.class}>
                    <div>Buy Now</div>
                    <img src='/static/images/icons/trailingIcon.png' alt='arrow icon'></img>
                </Button>
            </div>
        </div>
    );
};
export default Banner;