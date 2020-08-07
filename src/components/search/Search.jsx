import React, { useState } from 'react';
import { useDispatch, useSelector } from '../../hooks/appContext';
import { filterTitle, filterBody } from '../../actions/actions';

const Search = () => {
  const [type, setType] = useState('Title');
  const [query, setQuery] = useState('');

  const handleSearch = (searchType) => {
    if(searchType === 'Title') {
      console.log('searching title');
      useDispatch(filterTitle(query));
    } else if(searchType === 'Body') {
      console.log('searching body');
      useDispatch(filterBody(query));
    }
  };

  return (
    <div>
      <select onChange={({ target }) => setType(target.value)}>
        <option value='Title'>Title</option>
        <option value='Body'>Body</option>
      </select>
      <input onChange={({ target }) => setQuery(target.value)}/>
      <button onClick={() => handleSearch(type)}>Search</button>
    </div>
  );
};

export default Search;
