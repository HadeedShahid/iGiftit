import styles from './SearchBar.module.css'
const SearchBar=()=>{
    return(
        <div className={styles.cont}>
            <img className={styles.search} src='/static/images/icons/search.svg' alt='search icon'></img>
            <input className={styles.inp} type='text' placeholder='Search a product'></input>
        </div>
    );
}
export default SearchBar;