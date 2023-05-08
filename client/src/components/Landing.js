import React from 'react';
import styles from './Landing.module.css'
// import hero from '../assets/images/hero.jpg'
import hero from '../assets/images/hero_image.jpg'
import customer1 from '../assets/images/hero_1.jpg'
import customer2 from '../assets/images/hero_2.jpg'
import customer3 from '../assets/images/hero_3.jpg'
import customer4 from '../assets/images/hero_4.webp'
import customer5 from '../assets/images/hero_5.jpeg'
import customer6 from '../assets/images/hero_6.jpg'

import forbes from '../assets/images/forbes.png' 
import newyork from '../assets/images/newyork.png'
import business from '../assets/images/business.png'

import step1 from '../assets/images/step1.jpg'
import step2 from '../assets/images/step2.jpg'
import step3 from '../assets/images/step3.jpg'

const Landing = () => {
  return (
    <>
    <section className={styles.section_landing}>
      <div className={styles.hero}>
        <div className={styles.hero_textbox}>
          <h1 className={styles.hero_primary}>
            고객들의 피드백을 이메일로 손쉽게 받아보세요~
          </h1>
          <p className={styles.hero_description}>
            애프터바이는 제품, 서비스 개선을 위한 시장 점유율 #1 이메일 설문 플랫폼입니다.
          </p>
          <div className={styles.sent_emails}>
            <div className={styles.sent_emails_customers}>
              <img src={customer1} alt="An afterbuy customer" />
              <img src={customer2} alt="An afterbuy customer" />
              <img src={customer3} alt="An afterbuy customer" />
              <img src={customer4} alt="An afterbuy customer" />
              <img src={customer5} alt="An afterbuy customer" />
              <img src={customer6} alt="An afterbuy customer" />
            </div>
            <div className={styles.sent_emails_description}>
              <p>하루에<span className={styles.sent_emails_number}>1억</span> 이상의 이메일이 보내지고 있습니다.</p>
              <div>코인 구매할시 카드번호 <span className={styles.sent_emails_number}>4242 4242 4242 4242</span>로 테스트 구매가능합니다.</div>
            </div>

          </div>
        </div>
        <div className={styles.hero_imgbox}>
          <img src={hero} alt="an email app" />
        </div>
      </div>


    </section>
    <section className={styles.section_featured}>
      <div class="container">
        <div className={styles.logos}>
          <img src={forbes} alt="forbes logo"/>
          <img src={newyork} alt="newyork times logo" />
          <img src={business} alt="business insider logo" />
        </div>
      </div>
    </section>


<section className={styles.section_how}>
  <div class="container">
    <span class="subheading">애프터바이 사용법</span>
    <h2 class="heading-secondary">
      애프터바이와 함께 간단하게 이메일 설문지를 보내는 방법
    </h2>
  </div>

  <div className={styles.how_container_grid}>

    <div className={styles.step_text_box}>
      <p className={styles.step_number}>01</p>
      <h3 class="heading-tertiary">
        가입 후 코인을 구매하세요. 한 개의 설문 당 $1입니다.
      </h3>
      <p className={styles.step_description}>
        ReactJS로 만든 SPA를 즐겨보세요. 이 앱의 모든 버튼은 reusable component로 만들어졌습니다. 
        카드번호 4242 4242 4242 4242를 이용해 코인을 모의 충전할 수 있습니다.
      </p>
    </div>

    <div className={styles.step_img_box}>
      <img
        src={step1}
        className={styles.step_img}
        alt="애프터바이 사용법 1단계"
      />
    </div>


    <div className={styles.step_img_box}>
      <img
        src={step2}
        className={styles.step_img}
        alt="애프터바이 사용법 2단계"
      />
    </div>
    <div class="step-text-box">
    <p className={styles.step_number}>02</p>
      <h3 class="heading-tertiary">화면 오른쪽 하단에 뜨는 + 버튼을 눌러 설문을 작성하세요.</h3>
      <p className={styles.step_description}>
        다수의 고객에게 이메일을 보낼 때는 쉼표(,)로 구분해 보내주세요. 설문은 '예', '아니요'로 응답이 가능합니다.
      </p>
    </div>


    <div class="step-text-box">
    <p className={styles.step_number}>03</p>
      <h3 class="heading-tertiary">대시보드에서 고객들이 응답한 설문 통계를 실시간으로 볼 수 있습니다.</h3>
      <p className={styles.step_description}>
        실시간으로 고객들이 이메일 설문에 어떻게 응답했는지 알 수 있습니다.
      </p>
    </div>
    <div className={styles.step_img_box}>
      <img
        src={step3}
        className={styles.step_img}
        alt="애프터바이 사용법 3단계"
      />
    </div>


    </div>
</section>
    </>
  );
};

export default Landing;




