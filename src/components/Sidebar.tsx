import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import styles from '../styles/components/Sidebar.module.css'

export default function Sidebar() {
  const [isRetracted, setIsRetracted] = useState(false);
  const [isHomeSelected, setIsHomeSelected] = useState(true);
  const [isLeadeboardSelcted, setIsLeadeboardSelcted] = useState(false);
  const {width, height} = useWindowSize();

  useEffect(() => {
    if(width <= 360) {
      setIsRetracted(true);
    } else {
      setIsRetracted(false);
    }
  }, [width]);

  function handleRetract() {
    setIsRetracted(!isRetracted);
  }

  return(
    <div className={isRetracted ? styles.retracted : styles.sidebarContainer}>
      { isRetracted ? (
        <button onClick={handleRetract}>☰</button>
      ) : (
        <>
          { width <= 480 && <button onClick={handleRetract}>☰</button> }
            <img src='/favicon.ico' alt='Moveit logo' />
          <div>
            <div className={isHomeSelected ? styles.selected : styles.notSelected}>
              <HomeOutlinedIcon />
            </div>
          </div>
          <div>
            <div className={isLeadeboardSelcted ? styles.selected : styles.isLeadeboardSelcted}>
              <DoubleArrowIcon />
            </div>
          </div>
        </>
      )}
      
    </div>
  );
}