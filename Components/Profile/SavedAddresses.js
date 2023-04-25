import styles from './SavedAddresses.module.css'
import CardItem from './CardItem';
import { Fragment, useEffect, useState } from 'react';
const SavedAddresses=(props)=>{
    return(
        <Fragment>
        {/* <h2>{add}</h2> */}
        {Array.from(props.Addresses).map((addr,idx)=>{
                // console.log("in map",addr)
                return <CardItem  key={idx} id={idx} classes={styles.card} title={addr.address + ", " + addr.city} detail={addr.number}
                links={[{name:'Edit'},{name:'Remove',onclick:()=>{props.onRemove(idx)}}]}></CardItem>
                // <CardItem
                //     key={idx}
                //     id={idx}
                //     classes={styles.card}
                //     title={addr.address + ", " + addr.city}
                //     detail={addr.number}
                //     links={[
                //     { name: 'Edit' },
                //     { name: 'Remove', onClick: () => {} }
                //     ]}
                // />
            })} 
        </Fragment>
    );
};
export default SavedAddresses