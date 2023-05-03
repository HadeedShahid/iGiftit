import LandingpageCard from 'Components/UI/LandingpageCard';
import styles from './index.module.css'
import Authenticate from 'Components/Authenticate/Authenticate';
import Footer from '../../Components/Footer/Footer'
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
          {<Authenticate loginStyle={`${styles.BtnDesign} ${styles.BtnFont} ${styles.LoginBtn}`} signupStyle={`${styles.BtnDesign} ${styles.BtnFont} ${styles.SignupBtn}`}></Authenticate>}
          {/* <button className={}>Login</button> */}
          {/* <button className={}>Signup</button> */}
        </div>
      </div>
      <div className={styles.Hero}>
        <div className={styles.cont}>
          <div className={styles.Left}>
            <div className={styles.Title}><span>Thoughtful</span> Gifting made easy<span className={styles.dot}>.</span></div>
            <div className={styles.desc}>We aim to not deliver gifts, but to deliver love in a box to the people in your life who deserve it the most !</div>
            <button className={styles.GetStarted}>
              <span className={styles.text}>Get Started</span>
              <img src='/static/images/icons/heart.svg'></img>
            </button>
          </div>
          <div className={styles.buff}></div>
          <div className={styles.Right}>
            <img src='/static/images/icons/Hero_Image.png'></img>
            <img className={`${styles.rightImg} ${styles.slideinright}`} src='/static/images/icons/fav_per.png'></img>
            <img className={`${styles.leftImg} ${styles.slideinleft}`} src='/static/images/icons/car_chosen.png'></img>
            <img className={`${styles.you} ${styles.slideinyou}`} src='/static/images/icons/you.svg'></img>
            {/* <img className={styles.line} src='/static/images/icons/line.svg'></img> */}

          </div>
          <div className={styles.buff1}></div>
        </div>
        
      </div>
      <div className={styles.Delivered}> 
        <div className={styles.Delcont}>
          <div className={styles.DelLeft}>
              <div className={styles.DelTitle}>Love Delivered<span className={styles.dot}>,</span> Happiness Created</div>
              <div className={styles.DelDesc}>We provide gifts for every occasion. Whether its a birthday party, anniversary or a special occasion. We have got the perfect gifts ready to be delivered to your loved ones.</div>

            </div>
            <div className={styles.DelRight}>
              <LandingpageCard classes={`${styles.party} ${styles.DelCardColorGrey} ${styles.DelCardFontBlack}`} image="Party.svg" title="Party Event Gift"></LandingpageCard>
              <LandingpageCard classes={`${styles.heart} ${styles.DelCardColorBlack} ${styles.DelCardFontWhite}`} image="heart.svg" title="Gift for Someone Special"></LandingpageCard>
              <LandingpageCard classes={`${styles.wedding} ${styles.DelCardColorGrey} ${styles.DelCardFontBlack}`} image="wedding.svg" title="Wedding Gift"></LandingpageCard>
              <LandingpageCard classes={`${styles.Bear} ${styles.DelCardColorWhite} ${styles.DelCardFontBlack}`} image="Bear.svg" title="Gift for Kids"></LandingpageCard>
              <LandingpageCard classes={`${styles.Cake} ${styles.DelCardColorGrey} ${styles.DelCardFontBlack}`} image="Cake.svg" title="Birthday Gift"></LandingpageCard>
            </div>
        </div>
      </div>

      <div className={styles.Work}>
        <div className={styles.workStatement}>How we work</div>
        <div className={styles.WorkCont}>
          <div className={styles.PerfGiftText}>
            <div className={styles.TextWrap}>
              <div className={styles.circle}>1</div>
              <div className={styles.WorkTitle}>Choose the <span className={styles.underline}>Perfect Gift</span> for your Loved ones</div>
              <div className={styles.WorkDesc}>We, you and our highly intelligent AI algorithm work together to find a gift that will be be loved by the person you are trying to surprise.</div>
            </div>
          </div>
          <div className={styles.PerfGiftImg}>
            <img src='/static/images/landingpage/workimg1.svg'></img>
          </div>

          <div className={styles.PerfGiftImg}>
            <img src='/static/images/landingpage/workingimg2.svg'></img>
          </div>
          <div className={styles.WrapitText}>
            <div className={styles.TextWrap}>
              <div className={styles.circle}>2</div>
              <div className={styles.WorkTitle}><span className={styles.underline}>Wrap it</span> and Add a Lovely Greeting</div>
              <div className={styles.WorkDesc}>We help you to wrap it according to your like and add custom greeting cards to make the experience much better.</div>
            </div>
          </div>
        </div>

        <div className={styles.bottomWrap}>
          <div className={styles.WrapitText}>
              <div className={styles.Text__Wrap}>
                <div className={styles.circle}>3</div>
                <div className={styles.Work__Title}>Get it <span className={styles.underline}>Delivered</span> to your Loved ones</div>
                <div className={styles.Work__Desc}>We deliver your gift for you on the day you choose !</div>
              </div>
          </div>
          <div>
            <img className={styles.three} src='/static/images/landingpage/workimg3.svg'></img>
          </div>
          <button className={styles.WorkButton}>Get Started</button>
        </div>
        
      </div>

      <Footer></Footer>
    </div>
  );
  
};
export default LandingPage