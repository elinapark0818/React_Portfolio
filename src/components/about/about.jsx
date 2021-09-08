import React from 'react';
import styles from './about.module.css';


export default function About() {
  return (
      <div className={styles.about}>
        
        <div className={styles.container}>
          <div className={styles.title}>
          <button className={styles.about_btn}>About</button>
          </div>
          <p className={styles.ps}>"평생 직업으로 개발을 택했습니다. <br/>
            결코 만만하게 생각하지 않았고, 주변 지인들의 도움과 <br/>
            절대 포기하지 않겠다는 굳은 다짐이 있었기에 가능했습니다. <br/>
            끊임없이 배움을 갈구하며 노력은 배신하지 않는다는 생각으로 <br/>
            한 걸음씩 꾸준히 나아가자고 하면 된다고 제 자신을 믿었습니다."</p>

            <div className={styles.github}>
              <img src="./img/about_img/github_img.png" alt="github" />
              <div className={styles.description}>
                <p> 매일 공부하는 내용을 기록하고 있습니다.<br/>
                  하나씩 색칠되어가는 잔디를 보면서 <br/>
                  하루를 되짚어보고, 항시 개발공부를 잊지 않으면서 <br/>
                  개발자가 되어 프로그래밍하는 희망찬 내일을 기다리고 있습니다.</p>
              </div>
            </div>
            
            <div className={styles.cs50}>
              <div className={styles.description}>
                <p>컴퓨터 사이언스 공부를 하고 있습니다.<br/>
                  유튜브 '우아한Tech'에서 cs관련 영상도 틈틈히 보면서 <br/>
                  컴퓨터 공학과 Front-end 관련 지식을 쌓고 있습니다.</p>
              </div>
              <img src="./img/about_img/cs50_img.png" alt="cs50" />
            </div>
            <div className={styles.dreamcoding}>
              <img src="./img/about_img/dreamcoding_img.png" alt="cs50" />
              <div className={styles.description}>
                <p>드림코딩아카데미 강의를 통해 프론트엔드 개발자가 되기 위한 <br/> 
                  기초를 다졌습니다. 배울수록 배울 것이 많아지고 욕심이 생겼습니다. <br/>
                  "Don't forget code your dream!" 제 꿈을 그려나가는데 <br/>
                  가장 큰 힘이 되었던 시간이었습니다.</p>
              </div>
            </div>

            <div className={styles.solved}>
              <img src="./img/about_img/solved_img.png" alt="solved" />
              <div className={styles.description}>
                <p>일주일에 5문제 이상 알고리즘을 풀면서 <br/>
                문제해결능력을 기르고 있습니다. <br/>
                단숨에 해결하지 못하더라도 자신을 다독이면서 <br/>
                부딪치고 깨져도 해내는 나날을 보내고 있습니다.</p>
              </div>
            </div>
        </div>
      </div>  
  )
}
