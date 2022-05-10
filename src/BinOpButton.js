import { memo, useCallback, useMemo } from 'react';
import { useCalculatorData } from './calculatorData';

import styles from './Button.module.css';

const toFloat = (x) => parseFloat(x, 10);

const binOp = (f) => (v1, v2) => {
  const result = f(toFloat(v1), toFloat(v2));
  return result.toString(10);
};

const ops = {
  plus: {
    caption: '➕', // U+2795
    handler: binOp((v1, v2) => v1 + v2),
  },
  minus: {
    caption: '➖', // U+2796
    handler: binOp((v1, v2) => v1 - v2),
  },
  multiply: {
    caption: '✖', // U+2716
    handler: binOp((v1, v2) => v1 * v2),
  },
  divide: {
    caption: '➗', // U+2797
    handler: binOp((v1, v2) => v1 / v2),
  },
};

const BinOpButton = ({ op }) => {
  const {
    value0,
    stack: { value1 },
    actions: { acceptBinOpResult },
  } = useCalculatorData();

  const opInfo = useMemo(() => ops[op], [op]);

  const onClick = useCallback(() => {
    if (opInfo) {
      acceptBinOpResult(opInfo.handler(value1, value0));
    }
  }, [acceptBinOpResult, opInfo, value0, value1]);

  return (
    <div className={styles.button} onClick={onClick}>
      {opInfo?.caption || 'INVALID'}
    </div>
  );
};

export default memo(BinOpButton);
