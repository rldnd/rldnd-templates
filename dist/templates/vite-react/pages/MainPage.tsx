import React from 'react';

import styles from './mainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <h1>@rldnd</h1>
      <h2>vite-react-typescript</h2>
    </main>
  );
};

export default MainPage;
