import styles from './index.module.css'
const LandingPage=()=>{
  return(
    <div className={styles.Body}>
      <div className={styles.Header}>
        <div className={styles.Logo}>iGift it<span>.</span></div>
        <ul className={styles.Links}>
          <li><a href='#'>How we work</a></li>
          <li><a href='#'>Browse Gifts</a></li>
          <li><a href='#'>Something Special</a></li>
        </ul>
        <div className={styles.BtnContainer}>
          <button className={`${styles.BtnDesign} ${styles.BtnFont} ${styles.LoginBtn}`}>Login</button>
          <button className={`${styles.BtnDesign} ${styles.BtnFont} ${styles.SignupBtn}`}>Signup</button>
        </div>
      </div>
      <div className={styles.Hero}>
        <div className={styles.Left}>
          <div className={styles.Title}><span>Thoughtful</span> Gifting made easy<span className={styles.dot}>.</span></div>
          <div className={styles.desc}>We aim to not deliver gifts, but to deliver love in a box to the people in your life who deserve it the most !</div>
          <button className={styles.GetStarted}>
            <span>Get Started</span>
            <img src='/static/images/icons/heart.svg'></img>
          </button>
        </div>
        
      </div>
    </div>
  );
};
export default LandingPage