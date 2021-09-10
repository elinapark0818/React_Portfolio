import React from 'react'
import styles from './skills.module.css';
import { useSpring, animated } from 'react-spring';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiJira } from "react-icons/si";

export default function Skills() {

  const colorful1 = useSpring({
    loop: true,
    to: [{ opacity: 1, color: '#eb9550' },
    { opacity: 0.5, color: 'rgb(235, 73, 23)' },
      ],
    from: { opacity: 0.5, color: "red" },
  })
  const colorful2 = useSpring({
    loop: true,
    to: [{ opacity: 1, color: '#2542e6' },
    { opacity: 0.5, color: 'rgb(23, 133, 235)' },
      ],
    from: { opacity: 0.5, color: "skyblue" },
  })
  const colorful3 = useSpring({
    loop: true,
    to: [{ opacity: 1, color: '#f5db33' },
    { opacity: 0.5, color: 'rgb(242, 239, 24)' },
      ],
    from: { opacity: 0.5, color: "yellow" },
  })
  const colorful4 = useSpring({
    loop: true,
    to: [{ opacity: 1, color: '#a1f4f7' },
    { opacity: 0.5, color: 'rgb(14,26,19)' },
      ],
    from: { opacity: 0.5, color: "blue" },
  })

  return (

    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.title}>
          <button className={styles.skills_btn}>Skills</button>
            </div>

              <div className={styles.skill}>
                <ul className={styles.skill_category}>
                  <li className={styles.skill_item}>
                    <animated.div style={colorful1}>
                      <SiHtml5 className={styles.icon}/>
                      </animated.div>
                      <p className={styles.description}>Html5</p>
                  </li>
                  <li className={styles.skill_item}>
                    <animated.div style={colorful2}>
                      <SiCss3 className={styles.icon}/>
                      </animated.div>

                      <p className={styles.description}>CSS3</p>
                  </li>
                  <li className={styles.skill_item}>
                    <animated.div style={colorful3}>
                      <SiJavascript className={styles.icon}/>
                      </animated.div>

                      <p className={styles.description}>JavaScript</p>
                  </li>
                  <li className={styles.skill_item}>
                    <animated.div style={colorful4}>
                    <SiReact className={styles.icon} />
                      </animated.div>
                      <p className={styles.description}>React</p>
                  </li>
                </ul>
              </div>

              <div className={styles.title}>
                <h2>Etc</h2>
              </div>


        <div className={styles.etc1}>
          <ul className={styles.etc_category1}>
            <li className={styles.etc_item}>
              <SiPostcss/>            
            </li>
            <li className={styles.etc_item}>
              <SiNetlify/>
            </li>
            <li className={styles.etc_item}>
              <SiGit/>
            </li>
            <li className={styles.etc_item}>
              <SiReactrouter/>
            </li>
          </ul>
          </div>
          
        <div className={styles.etc2}>  
          <ul className={styles.etc_category2}>
            <li className={styles.etc_item}>
              <SiGithub/>
            </li>
            <li className={styles.etc_item}>
              <SiVisualstudiocode/>
            </li>
            <li className={styles.etc_item}>
              <SiFirebase/>              
            </li>
            <li className={styles.etc_item}>
              <SiJira/>              
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}