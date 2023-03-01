import { Fragment } from 'react';
import styles from './SavedAddresses.module.css';
import CardItem from '../Profile/CardItem';
const SavedAddresses=()=>{
    return(
        <div className={styles.wrap}>
            <div className={styles.title}>Saved Addresses</div>
            <CardItem title={'100 R3 Johar Town, ..... Lahore - 54000, Pakistan'} detail={'+92 123 4567893'}
            links={[{name:'Remove'}]} classes={styles.background}>
            </CardItem>
        </div>
        
    );
};
export default SavedAddresses