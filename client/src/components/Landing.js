import React from 'react';
import styles from './Landing.module.css'
import hero from '../assets/images/hero.jpg'

const Landing = () => {


  return (
    <div className={styles.landing}>

      <header class="header">
            <div class="header__logo-box">
                <img src={hero} alt="hero" className={styles.header} /> 
            </div>
      </header>
      <div className={styles.text_box}>
      <h1 className={styles.heading_primary}>
        <span className={styles.heading_primary_main}>After Buy</span>
        <span className={styles.heading_primary_sub}>제품, 서비스 개선을 위한 최적의 설문 플랫폼</span>
      </h1>
      </div>
      <div>코인 구매할시 카드번호 4242 4242 4242 4242 로 테스트 구매가능.</div>
    </div>

  );
};

export default Landing;
