import React from 'react';
import { useDispatch, useSelector } from '../../hooks/appContext';
import getMarkdown from '../../selectors/getMarkdown';
import { updateMarkdown } from '../../actions/actions';
import styles from './Editor.css';

const Editor = () => {
  const markdown = useSelector(getMarkdown);
  const dispatch = useDispatch();

  return (
    <textarea className={styles.Editor} value={markdown} onChange={({ target }) => dispatch(updateMarkdown(target.value))} />
  );
};

export default Editor;
