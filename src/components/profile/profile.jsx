import React from 'react';
import styles from './profile.module.css';

const Profile = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h1 className={styles.title}>Profile</h1>

        <div className={styles.group}>
          <img className={styles.avatar}
          src="img/profile_img/elina.jpg"
          alt="Elina"
          />
          <p className={styles.description}>
            "실패를 두려워하지 않고, 도전을 좋아하는 개발자입니다."
          </p>
        </div>

      </div>

      
        
    </section>
  )
}

export default Profile;