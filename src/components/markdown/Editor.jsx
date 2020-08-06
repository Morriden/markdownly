import React from 'react';
import { useDispatch, useSelector } from '../../hooks/appContext';
import { getMarkdown } from '../../selectors/markdownSelectors';
import { updateMarkdown } from '../../actions/actions';
import styles from './Editor.css';
import { useParams } from 'react-router-dom';

const Editor = () => {
  const dispatch = useDispatch();
  const { id = 1234 } = useParams();
  const markdown = useSelector(getMarkdown, +id);

  return (
    <textarea 
      className={styles.Editor} 
      value={markdown} 
      onChange={({ target }) => 
        dispatch(updateMarkdown(target.value, +id))} 
    />
  );
};

export default Editor;
