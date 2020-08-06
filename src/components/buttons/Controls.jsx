import React, { useState } from 'react';
import { useDispatch } from '../../hooks/appContext';
import { newMarkdown } from '../../actions/actions';

const Controls = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newMarkdown(title));
    setTitle('');
  };

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
      <label>
        <button >New Markdown</button>
      </label>
    </form>
    <label>
    <button onClick={}>Delete Markdown</button>
  </label>
  </section>
  );
};






export default Controls;
