import React from 'react';
import styles from './profile.module.css';

const Profile = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img className={styles.avatar} 
            src="/img/profile_img/elina.jpg" 
            alt="profile_avatar" 
          />
        </div>
      <div className={styles.title}>
        <h3>이름 : 박 윤 정</h3>
        <h3>생년월일 : 1992.06.04</h3>
        <h3>지원분야 : Front-end developer</h3>
        <h3>PS : </h3>
        </div>
    </div>
  )
}

export default Profile;