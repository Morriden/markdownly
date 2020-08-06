import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styles from './View.css';
import MarkdownList from '../markdownList/MarkdownList';
import Controls from '../buttons/Controls';

const View = () => {

  return (
    <>
      <Controls />
      <MarkdownList />
      <div className={styles.View}>
        <Editor />
        <Preview />
      </div>
    </>   
  );
};

export default View;
