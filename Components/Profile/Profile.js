import Header from '../Header/Header';
import styles from './Profile.module.css'
import YourInfo from './YourInfo';
const Profile=(props)=>{
    return(
        <div className={styles.container}>
            <YourInfo logoutBtn={props.logoutBtn} Addresses = {props.Addresses}></YourInfo>
        </div>
    );
};
export default Profile;