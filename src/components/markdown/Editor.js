import React from 'react';
import styles from './Editor.css';
import { useDispatch, getMarkdownState, useSelector } from '../../hooks/appContext';
import { updateMarkdown } from '../../utils/actions';

const Editor = () => {
  const markdown = useSelector(getMarkdownState);
  const dispatch = useDispatch();

  return (
    <textarea className={styles.Editor} value={markdown} onChange={({ target }) => dispatch(updateMarkdown(target.value))} />
  );
};

export default Editor;
