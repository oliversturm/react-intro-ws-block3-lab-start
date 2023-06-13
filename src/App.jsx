import { memo } from 'react';
import styles from './App.module.css';
import Calculator from './Calculator';

const App = () => {
  return (
    <div className={styles.container}>
      <h3>Calculators</h3>
      <div className={styles.calcbox}>
        <Calculator />
        <Calculator />
      </div>
    </div>
  );
};

const AppMemo = memo(App);
export default AppMemo;
