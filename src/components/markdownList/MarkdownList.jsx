import React from 'react';
import styles from './MarkdownList.css';
import { getMarkdownList } from '../../selectors/markdownSelectors';
import { useSelector } from '../../hooks/appContext';

const MarkdownList = () => {
  // this is pretend state for now, will change to real state later
  const markdownList = useSelector(getMarkdownList);
  const markdownListElements = markdownList.map((markdown) => (<li key={markdown.id}>
    {markdown.title}
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
