import React from 'react';
import styles from '../styles/components/Navigation.module.css';
import { useLocation } from 'react-router-dom';
const Navigation = () => {
  let location = useLocation();
  console.log(location);
  let styleActive = () => {
    return { backgroundColor: '#B2C4EB', color: 'black' };
  };
  return (
    <div className={styles.Navigation__body}>
      <button style={styleActive()}>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  );
};

export default Navigation;
