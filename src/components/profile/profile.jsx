import React from 'react';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.basic}>
          <div className={styles.profile}>
            <h2>프 로 필</h2>
            <h3>이름 : 박 윤 정</h3>
            <h3>생년월일 : 1992.06.04</h3>
            <h3>지원분야 : Front-end developer</h3>
            <h3>email : elinapark0818@gmail.com</h3>
            <h2>학 력</h2>
            <h3>한국교통대학교 졸업</h3>
            </div>

            <div className={styles.image}>
        <img className={styles.avatar} 
            src="/img/profile_img/study.png" 
            alt="profile_avatar" 
          />
        </div>


          <div className={styles.history}>
            <h2>경 험</h2>
            <h3>마이다스아이티 QA (6개월)</h3>
            <h3>스마일게이트RPG GM (12개월)</h3>
            <p>.</p>
            <h2>특 징</h2>
            <h3>배우는 것을 즐거워한다.</h3>
            <h3>절대 포기하지 않는다.</h3>
            </div>
          </div>
        </div>
      
  )
}

export default Profile;