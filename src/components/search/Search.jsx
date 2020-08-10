import React from 'react';
import { useDispatch } from '../../hooks/appContext';
import { updateSearchType, updateQuery } from '../../actions/actions';

const Search = () => {
  const dispatch = useDispatch();

 

  return (
    <div>
      <select onChange={({ target }) => dispatch(updateSearchType(target.value))}>
        <option value='title'>Title</option>
        <option value='body'>Body</option>
      </select>
      <input type='text' placeholder='search' onChange={({ target }) => dispatch(updateQuery(target.value))}/>
    </div>
  );
};

export default Search;
