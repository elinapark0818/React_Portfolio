import React from 'react';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <button className={styles.profile_btn}>Profile</button>
      
        <div className={styles.basic}>
          <div className={styles.profile}>
            <h2>기 본</h2>
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
            <h2>성격</h2>
            <h3>MBTI : ESFJ</h3>
            <h3>상대의 의견을 존중하며, 깊게 고민하고 신중하게 결정한다.</h3>
            </div>
          </div>
        </div>
      
  )
}

export default Profile;