import React from 'react';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <button className={styles.profile_btn}>프 로 필</button>

      <div className={styles.image}>
        <img className={styles.avatar} 
            src="/img/profile_img/profile_img.jpg" 
            alt="profile_img" 
          />
        </div>
      </div>
  )
}

export default Profile;