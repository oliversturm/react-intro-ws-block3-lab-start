import { memo } from 'react';
import { useCalculatorData } from './calculatorData';

import styles from './Button.module.css';

const EnterButton = () => {
  const {
    actions: { value0push },
  } = useCalculatorData();

  return (
    <div className={styles.button} onClick={value0push}>
      Enter
    </div>
  );
};

export default memo(EnterButton);
