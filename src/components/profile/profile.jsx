import React from 'react';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>

      <div className={styles.container}>
          <button className={styles.profile_btn}>프 로 필</button>

        <div className={styles.image}>
          <img className={styles.avatar} 
              src="/img/profile_img/profile_img.jpg" 
              alt="profile_img" 
            />
          </div>

          <div className={styles.description}>
            <h3>이름 : 박 윤 정</h3>
            <h3>생년월일 : 1992.06.04</h3>
            <h3>학력 : 한국교통대학교 졸업</h3>
            <h3>마이다스아이티 QA (6개월)</h3>
            <h3>스마일게이트RPG GM (12개월)</h3>
            <h3>MBTI : ESFJ</h3>
          </div>
          <div className={styles.etc}>
          <h3>"트렌디를 쫓고 사용성을 고려할 줄 아는 <br /> 매력적인 개발자가 될겁니다. <br/>
            도전을 두려워하지 않고, 새로운 것에 열광하며 <br /> 나만의 분야를 개척하여 인정받는 <br /> 멋있는 인생을 사는 것이 최종 목표입니다."</h3>
          </div>
      </div>
    </div>
    
  )
}

export default Profile;