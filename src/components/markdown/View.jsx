import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styles from './View.css';
import MarkdownList from '../markdownList/MarkdownList';

const View = () => {

  return (
    <>
      <MarkdownList />
      <div className={styles.View}>
        <Editor />
        <Preview />
      </div>
    </>   
  );
};

export default View;
