import React, { useEffect } from 'react';
import { useDispatch, useMarkdown } from '../../hooks/appContext';
import Editor from './Editor';
import Preview from './Preview';
import { updateMarkdown } from '../../utils/actions';
import styles from './View.css';

const View = () => {
  const markdown = useMarkdown();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMarkdown(markdown));
  }, [markdown]);

  return (
    <>
      <div className={styles.View}>
        <Editor />
        <Preview />
      </div>
    </>   
  );
};

export default View;
