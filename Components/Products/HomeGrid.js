import Banner from './Banner';
import styles from './HomeGrid.module.css';
import Item from './Item';
// import Banner from '../UI/Banner';
const HomeGrid=(props)=>{
    // console.log("in homegrid",props.data)
    return(

        <div className={styles.layout}>
            <Item data={props.data[4]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[1]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[2]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[3]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[2]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[3]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[1]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[0]} type={'gridItem'} classes={styles.card}></Item>
            <Banner class={styles.BanClass} image={'/static/images/icons/Banner.png'}></Banner>
            <Item data={props.data[3]} classes={`${styles.twoCols} ${styles.card}`} type={'custom'}></Item>
            <Item data={props.data[1]} type={'gridItem'} classes={styles.card}></Item>
            <Item data={props.data[2]} type={'gridItem'} classes={styles.card}></Item>
        </div>


        // <div className={styles.layout}>
        //     <Card height={styles.class}><Item name={'temp/watch.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/watch2.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/vase.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/wallet.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/legocar.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/Teddy.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/watch2.png'}></Item></Card>
        //     <Card height={styles.class}><Item name={'temp/watch.png'}></Item></Card>
        //     <Banner class={styles.BanClass}></Banner>
        //     <Card height={`${styles.class2} ${styles.twoCols}`}><Item custom={true} name={'temp/hotwheels.png'}></Item></Card>
        //     <Card height={styles.class2}><Item name={'temp/watch.png'}></Item ></Card>
        //     <Card height={styles.class2}><Item name={'temp/vase.png'}></Item></Card>

        // </div>
    );
};
export default HomeGrid;