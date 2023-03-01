import styles from './Item.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { Fragment } from 'react';
import Link from 'next/link';
const Item=(props)=>{
    const id = props.data.id;
    const image = props.data.image;
    const name = props.data.name;
    const seller = props.data.seller;
    const desc = props.data.desc;
    const price = props.data.price;

    const normal = <Card classes={`${styles.card} ${props.classes}`}>
            <div className={props.type==='gridItem' ? styles.gridSize : styles.imgContainer}>
                <img src={image}></img>
            </div>
            <div className={props.type==='gridItem' ? styles.colLowerWrap:styles.lowerWrap}>
                <div className={`${styles.productText} ${props.type!=='gridItem' && styles.marginRight}`}>
                    <div className={`${styles.upper} ${styles.flexRow}`}>
                        <span className={props.type==='gridItem' ? styles.gridname:styles.name}>{name}</span>
                        <span className={props.type==='gridItem' ? styles.gridseller:styles.seller}>{seller}</span>
                    </div>
                    <div className={`${styles.lower} ${styles.flexRow}`}>
                        <span className={props.type==='gridItem' ? styles.griddesc:styles.desc}>{desc}</span>
                        <span className={props.type==='gridItem' ? styles.gridprice:styles.price}>{price}</span>
                    </div>
                </div>
                <Link href={'/Products/' + id}>
                    <Button  class={`${styles.btnClass} ${props.type==='gridItem' && styles.marginTop}`}>
                    <span>Gift Item</span>
                    <img src='/static/images/icons/trailingIcon.png'></img>
                    </Button>
                </Link>
                
            </div>

        </Card>
    const custom = 
    <Card classes={`${styles.customCard} ${props.classes}`}>
            <div className={styles.customImgContainer}>
                <img src={image}></img>
            </div>
            <div className={styles.customLowerWrap}>
                <div className={styles.productText}>
                    <div className={`${styles.upper} ${styles.flexRow}`}>
                        <span className={styles.customName}>{name}</span>
                        <span className={styles.customSeller}>{seller}</span>
                    </div>
                        <span className={styles.customDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</span>
                </div>
                <div className={styles.customWrap}>
                    <span className={styles.customPrice}>{price}</span>
                    <Link href={'/Products/' + id}>
                        <Button class={styles.btnClass}>
                            <span>Gift Item</span>
                            <img src='/static/images/icons/trailingIcon.png'></img>
                        </Button>
                    </Link>
                </div>
                
            </div>

        </Card>
    return (
        <Fragment>
            {props.type === 'custom' ? custom:normal}
        </Fragment>
    );
};
export default Item;