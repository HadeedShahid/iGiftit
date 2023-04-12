import styles from './RecItem.module.css'
import Card from 'Components/UI/Card';
import Link from 'next/link';
import Button from 'Components/UI/Button';
import { Fragment } from 'react';
const RecItem=(props)=>{
    if (props.data==undefined){
        return;
    }
    const id = props.data.id;
    const image = props.data.images[0];
    const name = props.data.name;
    const seller = props.data.seller;
    const desc = props.data.description;
    const price = props.data.price;

    const normal = 
        <Card classes={`${styles.card} ${props.classes}`}>
            <div className={styles.ImgCont}>
                <img src={image}></img>
            </div>
                <div className={styles.lowerWrap}>
                    <div className={styles.name}><span>{name}</span></div>
                    <div className={styles.seller}><span className={styles.spn}>{seller}</span></div>
                    <div className={styles.desc}>{desc+desc+desc}</div>
                    <div className={styles.price}><span className={styles.spn}>Rs. {price}</span></div>
                    <div className={styles.button}>
                        <Link href={'/Products/' + id}>
                            <Button class={`${styles.btnClass}`}>
                                <span>Gift Item</span>
                                <img src='/static/images/icons/trailingIcon.png'></img>
                            </Button>
                        </Link>    
                    </div>
                    {/* <div className={`${styles.productText} ${props.type!=='gridItem' && styles.marginRight}`}>
                        <div className={`${styles.upper} ${styles.flexRow}`}>
                            <span className={props.type==='gridItem' ? styles.gridname:styles.name}>{name}</span>
                            <span className={props.type==='gridItem' ? styles.gridseller:styles.seller}>{seller}</span>
                        </div>
                        <div className={`${styles.lower} ${styles.flexRow}`}>
                            <span className={props.type==='gridItem' ? styles.griddesc:styles.desc}>{desc}</span>
                            <span className={props.type==='gridItem' ? styles.gridprice:styles.price}>{price}</span>
                        </div>
                    </div> */}
                    
                </div>
        </Card>
    return (
        <Fragment>
            {normal}
        </Fragment>
    );
}
export default RecItem;