import styles from './CartItem.module.css'
/*
 id: '6430yuio34b13078h31',
        name:'Teddy Bear',
        desc:'A home to aviation',
        longDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.',
        seller:'Al-Fatah',
        price:'Rs. 2000',
        colors:['Black','Brown',"Navy","Red"],
        images:['/static/images/icons/Teddy.png','/static/images/scroll/scroll2.png','/static/images/icons/Teddy.png']
*/
const CartItem=(props)=>{
    const image = props.data.image;
    const quantity = props.data.quantity;
    const name = props.data.name;
    const colors = props.data.colors ? props.data.colors:undefined;
    const sizes = props.data.sizes ? props.data.sizes:undefined;
    const price = props.data.price;
    const wrap = props.data.wrap ? props.data.wrap:undefined;
    const card = props.data.card ? props.data.card:undefined;

    const tick = <img src='/static/images/icons/tick.png'></img>
    const untick = <img src='/static/images/icons/untick.png'></img>

    return(
        <div className={styles.card}>
            <div className={styles.img_cont}>
                <img className={styles.prod_img} src={image} ></img>
                <div className={styles.prod_quant}>{quantity}</div>
            </div>
            <div className={styles.desc_cont}>
                <div className={styles.flex_horizontal}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.price}>Rs. {price}</div>
                </div>
                <div className={styles.flex_horizontal_left}>
                    <div className={styles.color}>{colors}</div>
                    <div className={styles.color}>{sizes}</div>
                </div>
                <div className={styles.flex_horizontal_left}>
                    <div className={styles.attrs}>{wrap ? tick:untick}Custom Wrapping</div>
                    <div className={styles.attrs}>{card ? tick:untick}Greeting Card</div>
                </div>
            </div>

        </div>
);
}
export default CartItem;