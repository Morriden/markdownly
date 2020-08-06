import marked from 'marked';

export const getMarkdownList = state => state.markdownList;

export const getMarkdown = (state, id) => {
  const markdown = state.markdownList.find(markdown => 
    (markdown.id === id));
  return markdown?.body;
};

export const getMarkdownPreview = (state, id) => marked(getMarkdown(state, id));
