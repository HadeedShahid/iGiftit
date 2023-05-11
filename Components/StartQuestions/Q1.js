import styles from './Q1.module.css'
const Q1=(props)=>{
    const questionImg=['him.svg', 'her.svg', 'kids.svg', 'baby.svg', 'friends.svg','all.svg',];
    const questionCat=['For Him', 'For Her', 'For Kids', 'For Baby', 'For Them', 'Custom']


    const cardClickHandler=()=>{

    }



    return(
        <div className={styles.Cont}>
            <div className={styles.question}>Who are you looking to buy a gift for ?</div>
            <div className={styles.cards}>
                {questionImg.map((img,index)=>{
                    return (
                        <div onClick={()=>{
                                props.addAnswer({'Who are you looking to buy a gift for ?':questionCat[index]})
                        }} key={Math.random()} className={styles.cardCont}>
                            <div className={styles.cardDesc}>{questionCat[index]}</div>
                            {img==='baby.svg' ? <img className={styles.baby} src={`/static/images/questions/`+img}></img> :<img src={`/static/images/questions/`+img}></img>}
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Q1;