import marked from 'marked';

export const getMarkdownID = state => state.currentMarkdownID;

export const getMarkdown = state => {
  
  let markdownBody;

  state.markdownList.filter(markdown => {
    if(markdown.id === getMarkdownID(state)) {
      return markdownBody = markdown.body;
    }
  });
  return markdownBody;
};

export const getMarkdownList = state => state.markdownList;


export const getMarkdownPreview = state => marked(getMarkdown(state));
