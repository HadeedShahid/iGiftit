import styles from './Input.module.css'
import Card from './Card'
import BtnNumeric from './BtnNumeric';
const Input=(props)=>{
    return (
        <Card classes={`${styles.width} ${props.classes}`}>
            <form className={styles.FormWrap}>
                <h1 className={styles.title}>Price Range</h1>
                <div className={styles.Wrap}>
                    <div className={styles.InpWrap}>
                        <label>From</label>
                        <div className={styles.container}>
                            <input type="number"></input>
                            <div className={styles.btnContainer}>
                                <BtnNumeric type={'up'}></BtnNumeric>
                                <BtnNumeric type={'dn'}></BtnNumeric>
                            </div>
                        </div>
                    </div>
                    <div className={styles.InpWrap}>
                        <label>To</label>
                        <div className={styles.container}>
                            <input type="number"></input>
                            <div className={styles.btnContainer}>
                                <BtnNumeric type={'up'}></BtnNumeric>
                                <BtnNumeric type={'dn'}></BtnNumeric>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </form>
            
        </Card>
    );
};
export default Input;