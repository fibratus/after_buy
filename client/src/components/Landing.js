import React from 'react';
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <h1 className={styles.landing}>
        애프터바이
      </h1>
      <div>
      제품, 서비스 개선을 위한 최적의 플랫폼
      </div>
      <div>
      코인 구매할시 카드번호 4242 4242 4242 4242 로 테스트 구매가능.
      </div>
    </div>
  );
};

export default Landing;
