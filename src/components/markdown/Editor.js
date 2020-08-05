import React from 'react';
import styles from './Editor.css';
import { useMarkdown, useDispatch } from '../../hooks/appContext';
import { updateMarkdown } from '../../utils/actions';

const Editor = () => {
  const markdown = useMarkdown();
  const dispatch = useDispatch();

  return (
    <textarea className={styles.Editor} value={markdown} onChange={({ target }) => dispatch(updateMarkdown(target.value))} />
  );
};

export default Editor;
