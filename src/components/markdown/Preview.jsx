import React from 'react';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector } from '../../hooks/appContext';
import { getMarkdownPreview } from '../../selectors/markdownSelectors';
import { useParams } from 'react-router-dom';

const Preview = () => {

  const { id } = useParams() || 1234;
  const __html = useSelector(getMarkdownPreview, +id);
  
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Preview;
