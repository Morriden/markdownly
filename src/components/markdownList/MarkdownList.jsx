import React from 'react';
import styles from './MarkdownList.css';

const MarkdownList = () => {
  // this is pretend state for now, will change to real state later
  const markdownList = ['stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more', 'stuff', 'other', 'more', 'even more'];
  const markdownListElements = markdownList.map((markdown, index) => (<li key={markdown + index}>
    {index}
  </li>));

  return (
    <div className={styles.MarkdownList}>
      <ul>
        {markdownListElements}
      </ul>
    </div>
  );
};

export default MarkdownList;
