import {  getMarkdownPreview, getMarkdown } from './markdownSelectors';

describe('getMarkdownBody selector', () => {
  it('will get the markdown with the selector', () => {
    const state = {
      currentMarkdownID: 1234,
  
      markdownList: [  
        { 
          id: 1234,
          title: 'whatever', 
          body: 'Look at that markdown file.'
        },
        { 
          id: 5678,
          title: 'whatever', 
          body: 'Do not Look at that markdown file.'
        },
      ]
    };

    const newmarkdown = getMarkdown(state);

    expect(newmarkdown).toEqual('Look at that markdown file.');
  });
});

describe('getMarkdownPreview selector', () => {
  it('will get the markdown preview with the selector', () => {
    const state = {
      currentMarkdownID: 1234,
  
      markdownList: [  
        { 
          id: 1234,
          title: 'whatever', 
          body: 'Look at that markdown file.'
        },
        { 
          id: 5678,
          title: 'whatever', 
          body: 'Do not Look at that markdown file.'
        },
      ]
    };

    const newmarkdown = getMarkdownPreview(state);

    expect(newmarkdown).toEqual('<p>Look at that markdown file.</p>\n');
  });
});
