import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styles from './View.css';
import MarkdownList from '../markdownList/MarkdownList';
import Controls from '../buttons/Controls';
import Search from '../search/Search';

const View = () => {

  return (
    <>
      <Controls />
      <MarkdownList />
      <Search />
      <div className={styles.View}>
        <Editor />
        <Preview />
      </div>
    </>   
  );
};

export default View;
