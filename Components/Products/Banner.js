import styles from './Banner.module.css';
import Button from '../UI/Button';
import Link from 'next/link';
const Banner=(props)=>{
    const image = props.image;
    const id = '6463269492ad558bfa90dab9'
    return(
        <div className={`${styles.wrapper} ${props.class}`}>
            <img className={styles.mainImg} src={image} alt='Banner img'></img>
            <div className={styles.ContentWrapper}>
                <div className={styles.BannerText}>Beautiful Gift Baskets for your loved ones</div>
                <Link style={{ textDecoration: 'none' }} href={'/Products/' + id}>
                    <Button class={styles.class}>
                        <div>Buy Now</div>
                        <img src='/static/images/icons/trailingIcon.png' alt='arrow icon'></img>
                    </Button>
                </Link>
            </div>
        </div>
    );
};
export default Banner;