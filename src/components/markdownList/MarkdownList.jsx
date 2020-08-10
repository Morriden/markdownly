import React from 'react';
import styles from './MarkdownList.css';
import { getSearchResults } from '../../selectors/markdownSelectors';
import { useSelector } from '../../hooks/appContext';
import { Link } from 'react-router-dom';

const MarkdownList = () => {
  
  const searchResults = useSelector(getSearchResults);
  const markdownListElements = searchResults.map((markdown) => (
    <Link to={`/markdown/${markdown.id}`} key={markdown.id} >
      <li key={markdown.id}>
        {markdown.title}
      </li>
    </Link>
  ));

  return (
    <div className={styles.MarkdownList}>
      <ul>
        {markdownListElements}
      </ul>
    </div>
  );
};

export default MarkdownList;
