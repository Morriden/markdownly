import React from 'react';

const MarkdownList = () => {
  const markdownList = ['stuff', 'other', 'more', 'even more'];
  const markdownListElements = markdownList.map((markdown, index) => (<li key={markdown + index}>
    {index}
  </li>));

  return (
    <div>
      <ul>
        {markdownListElements}
      </ul>
    </div>
  );
};

export default MarkdownList;
