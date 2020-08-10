import marked from 'marked';

// this is kind of useless with the new search feature, should delete but want to check with team first
export const getMarkdownList = state => state.markdownList;

export const getSearchResults = state => state.markdownList.filter(markdown => {
  if(!state.query) return markdown;
  return markdown[state.searchType].includes(state.query);
});

export const getMarkdown = (state, id) => {
  const markdown = state.markdownList.find(markdown => 
    (markdown.id === id)) ;
  return markdown?.body;
};

export const getMarkdownPreview = (state, id) => marked(getMarkdown(state, id));
