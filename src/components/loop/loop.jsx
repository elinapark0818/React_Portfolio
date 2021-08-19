import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './loop.module.css';

export default function LoopTrue() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })  
    return (
        <animated.div
        style={styles}
        >믿음직한 개발자가 되겠습니다.</animated.div>
    )
}

