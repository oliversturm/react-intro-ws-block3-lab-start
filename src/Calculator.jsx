import { memo } from 'react';
import BinOpButton from './BinOpButton';

import styles from './Calculator.module.css';
import { CalculatorContext, useCalculatorDefaultData } from './calculatorData';
import CharButton from './CharButton';
import Display from './Display';
import EnterButton from './EnterButton';

const Calculator = () => {
  const data = useCalculatorDefaultData();

  return (
    <CalculatorContext.Provider value={data}>
      <div className={styles.outer}>
        <Display />
        <div className={styles.keys}>
          <CharButton char="7" />
          <CharButton char="8" />
          <CharButton char="9" />
          <BinOpButton op="divide" />

          <CharButton char="4" />
          <CharButton char="5" />
          <CharButton char="6" />
          <BinOpButton op="multiply" />

          <CharButton char="1" />
          <CharButton char="2" />
          <CharButton char="3" />
          <BinOpButton op="minus" />

          <div />
          <CharButton char="0" />
          <CharButton char="." once={true} />
          <BinOpButton op="plus" />

          <div />
          <div />
          <div />
          <EnterButton />
        </div>
      </div>
    </CalculatorContext.Provider>
  );
};

const CalculatorMemo = memo(Calculator);
export default CalculatorMemo;
