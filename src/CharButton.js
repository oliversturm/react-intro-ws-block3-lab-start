import { memo, useCallback } from 'react';

import styles from './Button.module.css';
import { useCalculatorData } from './calculatorData';

const CharButton = ({ char, once = false }) => {
  const {
    actions: { value0append },
  } = useCalculatorData();

  const onClick = useCallback(() => {
    value0append(char, once);
  }, [value0append, char, once]);

  return (
    <div className={styles.button} onClick={onClick}>
      {char}
    </div>
  );
};

export default memo(CharButton);
