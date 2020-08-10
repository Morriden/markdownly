import React, { useState } from 'react';
import { useDispatch, useSelector } from '../../hooks/appContext';
import { newMarkdown, deleteMarkdown } from '../../actions/actions';
import { useParams, useHistory } from 'react-router-dom';
import { getMarkdownList } from '../../selectors/markdownSelectors';

const Controls = () => {
  const [title, setTitle] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const markdownList = useSelector(getMarkdownList); 

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newMarkdown(title));
    setTitle('');
  };

  const handleClick = (id) => {
    dispatch(deleteMarkdown(id));
    history.push(`/markdown/${markdownList[0].id}`);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Title' value={title} onChange={({ target }) => setTitle(target.value)} />
        <label>
          <button>New Markdown</button>
        </label>
      </form>
      <label>
        <button onClick={() => handleClick(+id)}>Delete Current Markdown</button>
      </label>
    </section>
  );
};

export default Controls;
