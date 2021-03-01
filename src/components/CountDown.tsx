import React, { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

export default function CountDown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCoundDown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return(
    <div>
      <div className={styles.countDownContainer}>
        <div className={styles.timer}>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div className={styles.timer}>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          className={styles.countDownButton}
          disabled={true}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type='button'
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCoundDown}  
            >
              Abandonar ciclo
            </button>
          ) : (
            <button 
              type='button'
              className={styles.countDownButton}
              onClick={startCountDown}  
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}