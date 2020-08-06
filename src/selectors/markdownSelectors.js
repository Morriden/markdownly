import marked from 'marked';

export const getMarkdownID = state => state.currentMarkdownID;

export const getMarkdown = state => {
  
  const markdown = state.markdownList.find(markdown => 
    (markdown.id === getMarkdownID(state)));
  return markdown?.body;
};
export const getMarkdownList = state => state.markdownList;


export const getMarkdownPreview = state => marked(getMarkdown(state));
