import React from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import { useMarkdown } from '../../hooks/appContext';

const Preview = () => {
  const markdown = useMarkdown();
  const __html = marked(markdown);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Preview;
