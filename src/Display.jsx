import { memo } from 'react';
import { useCalculatorData } from './calculatorData';

import styles from './Display.module.css';

const Display = () => {
  const {
    stack: { value1, value2, value3, value4 },
    value0,
    hexValue0,
    octValue0,
    binValue0,
  } = useCalculatorData();

  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        <div className={styles.stack}>
          <div>{value4}</div>
          <div>{value3}</div>
          <div>{value2}</div>
          <div>{value1}</div>
        </div>
        <div className={styles.value0}>{value0}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footercell}>{hexValue0}</div>
        <div className={styles.footercell}>{octValue0}</div>
        <div className={styles.footercell}>{binValue0}</div>
      </div>
    </div>
  );
};

const DisplayMemo = memo(Display);
export default DisplayMemo;
