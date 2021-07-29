import React from 'react';
import styles from './profile.module.css';

const Profile = (props) => {
  return (
    <section className={styles.section}>

        <div className={styles.layout}>

          <img className={styles.avatar}
          src="img/profile_img/elina.jpg"
          alt="Elina"
          />

        </div>

        <div className={styles.description}>
          <h2>
            실패를 두려워하지 않고, 도전을 좋아하는 개발자입니다.
          </h2>
        </div>
        
    </section>
  )
}

export default Profile;