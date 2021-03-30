import React from 'react';
import styles from '../../TodoOne/TodoOne.module.css';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};
