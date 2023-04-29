import Banner from './Banner';
import styles from './HomeGrid.module.css';
import Item from './Item';
import HGridItem from './HGridItem';
import { Fragment, useState, useEffect, useRef } from 'react';
import Questions from 'Components/Questions/Questions';
// import Banner from '../UI/Banner';
const HomeGrid=(props)=>{
    const data = props.data;
    const [pageNumber, setPageNumber] = useState(1);
    const [productsToDisplay,setproductsToDisplay] = useState(0)
    const [productsPerPage,setproductsPerPage] = useState(11)
    const [pageLinks,setPageLinks] = useState(0);
    const [totalPagesState,setTotalPagesState] = useState(0);
    const myRef = useRef(null)
    const handlePageClick = (pageNumber) => {
        setPageNumber(pageNumber);
    };
    const executeScroll = () => myRef.current.scrollIntoView()    
    useEffect(() => {
        const firstProductIndex = (pageNumber - 1) * productsPerPage;
        const lastProductIndex = firstProductIndex + productsPerPage;
        setproductsToDisplay(data.slice(firstProductIndex, lastProductIndex));
        const totalPages = Math.ceil(data.length / productsPerPage);
        setTotalPagesState(totalPages)
        // setPageLinks(
        //     Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
        //         return (
        //           <button key={page} onClick={() => {handlePageClick(page);executeScroll()}}>
        //             {page}
        //           </button>
        //         );
        //     })
        // )
        setPageLinks(
            Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
              if (page === pageNumber) {
                return (
                  <button className={`${styles.btnFont} ${styles.active}`} key={page} disabled>
                    {page}
                  </button>
                );
              } else if (page === 1 || page === totalPages || (page >= pageNumber - 2 && page <= pageNumber + 2)) {
                return (
                  <button className={styles.btnFont} key={page} onClick={() => {handlePageClick(page);executeScroll()}}>
                    {page}
                  </button>
                );
              } else if (page === pageNumber - 3 || page === pageNumber + 3) {
                return <span className={styles.btnFont} key={page}>...</span>;
              } else {
                return null;
              }
            })
          );
    }, [data,pageNumber,productsPerPage]);
    return(
        <Fragment>
            <div ref={myRef} className={styles.layout}>
                <HGridItem data={productsToDisplay[0]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[1]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[2]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[3]} classes={styles.card}></HGridItem>
                {/* <Item data={props.data[3]} type={'gridItem'} classes={styles.card}></Item>
                <Item data={props.data[1]} type={'gridItem'} classes={styles.card}></Item>
                <Item data={props.data[2]} type={'gridItem'} classes={styles.card}></Item>
                <Item data={props.data[3]} type={'gridItem'} classes={styles.card}></Item> */}
                <HGridItem data={productsToDisplay[4]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[5]} classes={styles.card}></HGridItem>
                <Questions data={props.questions} classes={`${styles.colorCard}`}></Questions>
                <HGridItem data={productsToDisplay[7]} classes={styles.card}></HGridItem>
                <Banner class={styles.BanClass} image={'/static/images/icons/Banner.png'}></Banner>
                <Item data={productsToDisplay[8]} classes={`${styles.twoCols} ${styles.card}`} type={'custom'}></Item>
                <HGridItem data={productsToDisplay[9]} type={'gridItem'} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[10]} type={'gridItem'} classes={styles.card}></HGridItem>
            </div>
            <div className={styles.btnWrap}>
                <button disabled={pageNumber==1 ? true:false} onClick={()=>{
                    setPageNumber((prev)=>prev-1);
                    executeScroll();
                }} className={`${styles.btn} ${styles.leftBtn}`}>
                    <img className={`${styles.leftBtnImg}`} src='/static/images/icons/rightArrowBtn.svg'></img>
                </button>
                    {pageLinks}
                <button disabled={pageNumber==totalPagesState ? true:false} onClick={()=>{
                    setPageNumber((prev)=>prev+1)
                    executeScroll();
                }} className={`${styles.btn} ${styles.rightBtn}`}>
                    <img className={`${styles.rightBtnImg} `} src='/static/images/icons/rightArrowBtn.svg'></img>
                </button>
            </div>

        </Fragment>
    );
};
export default HomeGrid;