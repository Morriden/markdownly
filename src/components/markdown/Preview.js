import React from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector, getMarkdownState } from '../../hooks/appContext';

const Preview = () => {
  const markdown = useSelector(getMarkdownState);
  const __html = marked(markdown);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Preview;
