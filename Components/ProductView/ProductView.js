import styles from './ProductView.module.css'
import Header from '../Header/Header';
import VerticleScroll from './VerticleScroll';
import ProductInfo from './ProductInfo';
import { Fragment } from 'react';
const ProductView=(props)=>{
    return(
        <Fragment>
            <Header></Header>
            <div className={styles.wrapper}>
                <div className={styles.TextWrap}>
                    <div className={styles.heading}>Product Description</div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</div>
                </div>
                <VerticleScroll></VerticleScroll>
                <div className={styles.prodInfo}>
                    <ProductInfo></ProductInfo>
                </div>
            </div>
           
            
        </Fragment>
    );
};

export default ProductView;
