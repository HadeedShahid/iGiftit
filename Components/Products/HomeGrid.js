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
    const [productsPerPage,setproductsPerPage] = useState(10)
    const [pageLinks,setPageLinks] = useState(0);
    const [totalPagesState,setTotalPagesState] = useState(0);
    const [gridItems,setGridItems] = useState(0);
    const myRef = useRef(null)
    const handlePageClick = (pageNumber) => {
        setPageNumber(pageNumber);
    };
    const executeScroll = () => myRef.current.scrollIntoView() 
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
      // Check for the existence of the window object
      if (typeof window !== 'undefined') {
        // Update screenWidth state on window resize
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
  
        // Cleanup the event listener
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    useEffect(() => {
        const firstProductIndex = (pageNumber - 1) * productsPerPage;
        const lastProductIndex = firstProductIndex + productsPerPage;
        setproductsToDisplay(data.slice(firstProductIndex, lastProductIndex));
        const totalPages = Math.ceil(data.length / productsPerPage);
        setTotalPagesState(totalPages)
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

    useEffect(()=>{
      console.log("in reeval")
      if (productsToDisplay){
        function swap(arr, i, j) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        setGridItems(()=>{
          // const arr = [0, 1, 2, 3, 4, 5, 6, 7];
          console.log(productsToDisplay)
          const arr = Array.from(Array((productsPerPage-3)+ 1).keys());
          const que_index=0;
          const randomIndex = Math.floor(Math.random() * arr.length);
          // Use the random index to access a random element from the array
          const randomElement = arr[randomIndex];
          let items = []
          console.log(screenWidth)
          if (screenWidth > 821){
            items = [
              <Questions data={props.questions} classes={`${styles.colorCard}`}></Questions>,
              <HGridItem data={productsToDisplay[0]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[1]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[2]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[3]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[4]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[5]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[6]} classes={styles.card}></HGridItem>,
              <Banner class={styles.BanClass} image={'/static/images/icons/Banner.png'}></Banner>,
              <Item data={productsToDisplay[7]} classes={`${styles.twoCols} ${styles.card}`} type={'custom'}></Item>,
              <HGridItem data={productsToDisplay[8]} type={'gridItem'} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[9]} type={'gridItem'} classes={styles.card}></HGridItem>,
            ]
          }
          else if (screenWidth<=821 && screenWidth > 576){
            items = [
              <Questions data={props.questions} classes={`${styles.colorCard}`}></Questions>,
              <HGridItem data={productsToDisplay[0]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[1]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[2]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[3]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[4]} classes={styles.card}></HGridItem>,
              <Banner class={styles.BanClass} image={'/static/images/icons/Banner.png'}></Banner>,
              <Item data={productsToDisplay[5]} classes={`${styles.twoCols} ${styles.card}`} type={'custom'}></Item>,
              <HGridItem data={productsToDisplay[6]} type={'gridItem'} classes={styles.card}></HGridItem>,
            ]
          }
          else{
            items = [
              <Questions data={props.questions} classes={`${styles.colorCard}`}></Questions>,
              <HGridItem data={productsToDisplay[0]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[1]} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[2]} classes={styles.card}></HGridItem>,
              <Banner class={styles.BanClass} image={'/static/images/icons/Banner.png'}></Banner>,
              <HGridItem data={productsToDisplay[3]} type={'gridItem'} classes={styles.card}></HGridItem>,
              <HGridItem data={productsToDisplay[4]} type={'gridItem'} classes={styles.card}></HGridItem>,
            ]
          }
          console.log(que_index,randomElement)
          swap(items, que_index, randomElement);
          // insertItem(items,<Questions data={props.questions} classes={`${styles.colorCard}`}></Questions>,[7,8])
          return(
            items
          );
        });
      }
    },[productsToDisplay])
  

    useEffect(()=>{
      // screenWidth<821 ? (setproductsPerPage(8),console.log("changes")):setproductsPerPage(10)
      if (screenWidth < 821 && screenWidth > 576){
        setproductsPerPage(8);
      }
      else if (screenWidth <= 576){
        setproductsPerPage(6);
      }
      else{
        setproductsPerPage(10)
      }
    },[screenWidth])
    return(
        <Fragment>
            {/* <div>{screenWidth<821 ? "True":"False"}</div>; */}
            <div ref={myRef} className={styles.layout}>
                {gridItems}
                {/* <HGridItem data={productsToDisplay[0]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[1]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[2]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[3]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[4]} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[5]} classes={styles.card}></HGridItem>
                <Questions data={props.questions} classes={`${styles.colorCard}`}></Questions>
                <HGridItem data={productsToDisplay[7]} classes={styles.card}></HGridItem>
                <Banner class={styles.BanClass} image={'/static/images/icons/Banner.png'}></Banner>
                <Item data={productsToDisplay[8]} classes={`${styles.twoCols} ${styles.card}`} type={'custom'}></Item>
                <HGridItem data={productsToDisplay[9]} type={'gridItem'} classes={styles.card}></HGridItem>
                <HGridItem data={productsToDisplay[10]} type={'gridItem'} classes={styles.card}></HGridItem> */}
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