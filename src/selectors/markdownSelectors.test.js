import { getMarkdownPreview, getMarkdown } from './markdownSelectors';

describe('getMarkdownBody selector', () => {
  it('will get the markdown with the selector', () => {
    const state = { 
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

    const newmarkdown = getMarkdown(state, 1234);

    expect(newmarkdown).toEqual('Look at that markdown file.');
  });
});

describe('getMarkdownPreview selector', () => {
  it('will get the markdown preview with the selector', () => {
    const state = { 
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

    const newmarkdown = getMarkdownPreview(state, 1234);

    expect(newmarkdown).toEqual('<p>Look at that markdown file.</p>\n');
  });
});
