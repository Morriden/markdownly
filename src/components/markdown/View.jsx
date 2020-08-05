import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styles from './View.css';

const View = () => {

  return (
    <>
      <div className={styles.View}>
        <Editor />
        <Preview />
      </div>
    </>   
  );
};

export default View;
