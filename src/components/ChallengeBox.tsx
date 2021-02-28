import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completteChallenge } = useContext(ChallengesContext);
  const { resetCoundDown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completteChallenge();
    resetCoundDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCoundDown();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>{activeChallenge.ammount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>{activeChallenge.type}</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type='button'
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level up' />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}
