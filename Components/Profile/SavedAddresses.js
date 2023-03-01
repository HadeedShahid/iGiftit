import styles from './SavedAddresses.module.css'
import CardItem from './CardItem';
import { Fragment } from 'react';
const SavedAddresses=(props)=>{
   const Addresses = Array.from(props.Addresses).map((addr)=>{
    return <CardItem  key={Math.random()} classes={styles.card}title={addr.name} detail={addr.city}
    links={[{name:'Edit'},{name:'Remove'}]}
    ></CardItem>
    })
    return(
        <Fragment>
        {Addresses} 
        </Fragment>
    );
};
export default SavedAddresses