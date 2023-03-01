import styles from './Layout.module.css';

const Layout=(props)=>{
    return(
        <div className={styles.Container}>{props.children}</div>
    );
}

export default Layout;