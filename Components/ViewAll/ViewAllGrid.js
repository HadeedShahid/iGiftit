import { Fragment, useEffect,useState,useRef } from 'react';
import styles from './ViewAllGrid.module.css'
import HGridItem from 'Components/Products/HGridItem';
const ViewAllGrid=(props)=>{
    const productsToDisplay = props.data
    const MAX_BUTTONS = 5;
    const halfMaxButtons = Math.floor(MAX_BUTTONS / 2);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationBtn,setPaginationButn] = useState()
    const [products,setProducts] = useState();
    const [totalPages,setTotalPages]=useState();

    // const executeScroll = () => myRef.current.scrollIntoView() 
    const myRef = useRef(null)
    // const []
    const productsPerPage = 20;
    const handlePageChange = (pageNumber) => {
        console.log("changed current page")
        setCurrentPage(pageNumber);
    };
   useEffect(()=>{setCurrentPage(1)},[props.searchQuery])
    useEffect(() => {
        if (productsToDisplay) {
          const pageNumbers = Math.ceil(productsToDisplay.length / productsPerPage);
          setTotalPages(pageNumbers);
      
          let startPage = currentPage - 2; // Adjust the number of buttons displayed
          let endPage = currentPage + 2; // Adjust the number of buttons displayed
      
          if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(pageNumbers, startPage + 4); // Adjust the number of buttons displayed
          }
      
          if (endPage > pageNumbers) {
            endPage = pageNumbers;
            startPage = Math.max(1, endPage - 4); // Adjust the number of buttons displayed
          }
      
          const pagination = [];
      
        //   if (currentPage > 1) {
        //     pagination.push(
        //       <button
        //         key="prev"
        //         onClick={() => handlePageChange(currentPage - 1)}
        //         className={`${styles.btnFont}`}
        //       >
        //         {"<"}
        //       </button>
        //     );
        //   }
      
          if (startPage > 1) {
            pagination.push(
              <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={`${styles.btnFont}`}
              >
                {1}
              </button>
            );
      
            if (startPage > 2) {
              pagination.push(
                <span key="ellipsis1">...</span>
              );
            }
          }
      
          for (let i = startPage; i <= endPage; i++) {
            pagination.push(
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={i === currentPage ? `${styles.btnFont} ${styles.active}` : `${styles.btnFont}`}
              >
                {i}
              </button>
            );
          }
      
          if (endPage < pageNumbers) {
            if (endPage < pageNumbers - 1) {
              pagination.push(
                <span key="ellipsis2">...</span>
              );
            }
      
            pagination.push(
              <button
                key={pageNumbers}
                onClick={() => handlePageChange(pageNumbers)}
                className={`${styles.btnFont}`}
              >
                {pageNumbers}
              </button>
            );
          }
      
        //   if (currentPage < pageNumbers) {
        //     pagination.push(
        //       <button
        //         key="next"
        //         onClick={() => handlePageChange(currentPage + 1)}
        //         className={`${styles.btnFont}`}
        //       >
        //         {">"}
        //       </button>
        //     );
        //   }
      
          setPaginationButn(pagination);
      
          const indexOfLastProduct = currentPage * productsPerPage;
          const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
          const currentProducts = productsToDisplay.slice(indexOfFirstProduct, indexOfLastProduct);
          setProducts(currentProducts);
        }
      }, [productsToDisplay, currentPage]);
    useEffect(()=>{
        // executeScroll()
        window.scrollTo(0, 0)
    },[currentPage])
    return(
        <Fragment>
                <div ref={myRef}  className={styles.layout}>
                    {products ? products.map((product) => (
                        //    <div key={product.id}>{product.name}</div>
                           <HGridItem key={Math.random()} data={product} classes={styles.card}></HGridItem>
                    )):undefined}
                    {/* <HGridItem data={productsToDisplay[0]} classes={styles.card}></HGridItem>,
                    <HGridItem data={productsToDisplay[1]} classes={styles.card}></HGridItem>,
                    <HGridItem data={productsToDisplay[2]} classes={styles.card}></HGridItem>,
                    <HGridItem data={productsToDisplay[3]} classes={styles.card}></HGridItem>,
                    <HGridItem data={productsToDisplay[4]} classes={styles.card}></HGridItem>,
                    <HGridItem data={productsToDisplay[5]} classes={styles.card}></HGridItem>,
                    <HGridItem data={productsToDisplay[6]} classes={styles.card}></HGridItem>, */}
                </div>
                <div className={styles.btnWrap}>
                    <button disabled={currentPage==1 ? true:false} onClick={()=>{
                        setCurrentPage((prev)=>prev-1);
                        // executeScroll();
                        }} className={`${styles.btn} ${styles.leftBtn}`}>
                        <img className={`${styles.leftBtnImg}`} src='/static/images/icons/rightArrowBtn.svg'></img>
                    </button>
                    {paginationBtn}
                    <button disabled={currentPage==totalPages ? true:false} onClick={()=>{
                        setCurrentPage((prev)=>prev+1)
                        // executeScroll();
                        }} className={`${styles.btn} ${styles.rightBtn}`}>
                        <img className={`${styles.rightBtnImg} `} src='/static/images/icons/rightArrowBtn.svg'></img>
                    </button>
                </div>
        </Fragment>
        
    );
}
export default ViewAllGrid