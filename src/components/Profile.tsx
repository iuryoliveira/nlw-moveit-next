import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/diego3g.png' alt='Diego Fernandes'/>
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src='/icons/level.svg' alt='Level'/>
          Level {level}
        </p>
      </div>
    </div>
  )
}