import reducer from './appReducer';
import { updateMarkdown, newMarkdown, deleteMarkdown, filterTitle, filterBody } from '../actions/actions';

describe('app reducer', () => {
  it('handles the updatemarkdown action', () => {
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

    const action = updateMarkdown('something else', 1234);

    const newstate = reducer(state, action);

    expect(newstate).toEqual(
      { 
        markdownList: [
          { 
            body: 'something else', 
            id: 1234, 
            title: 'whatever' 
          }, 
          {
            body: 'Do not Look at that markdown file.',
            id: 5678, 
            title: 'whatever' 
          }
        ] 
      }
    );
  });

  it('handles the new tab action', () => {
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

    const action = newMarkdown('title');

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      {  
        markdownList: [
          { 
            body: 'Look at that markdown file.', 
            id: 1234, 
            title: 'whatever' 
          }, 
          { 
            body: 'Do not Look at that markdown file.', 
            id: 5678, 
            title: 'whatever' 
          },
          { 
            id: expect.anything(), 
            title: 'title', 
            body: '' 
          }
        ] 
      }
    );
  });

  it('deletes a object from the array', () => {
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

    const action = deleteMarkdown(5678);

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      {  
        'markdownList': [
          { 
            body: 'Look at that markdown file.',
            id: 1234, 
            title: 'whatever' }, 
        ] 
      }
    );
  });

  it('filters an object by title from the array', () => {
    const state = {
      markdownList: [  
        { 
          id: 1234,
          title: 'old markDown',
          body: 'Look at that markdown file.'
        },
        { 
          id: 5678,
          title: 'whatever',
          body: 'Do not Look at that markdown file.'
        },
        { 
          id: 1278,
          title: 'new markDown',
          body: 'Super original text.'
        },
      ]
    };

    const action = filterTitle('whatever');

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      {  
        markdownList: [  
          { 
            id: 1234,
            title: 'old markDown',
            body: 'Look at that markdown file.'
          },
          { 
            id: 5678,
            title: 'whatever',
            body: 'Do not Look at that markdown file.'
          },
          { 
            id: 1278,
            title: 'new markDown',
            body: 'Super original text.'
          },
  
        ],
        'searchResult': [
          { 
            id: 5678,
            title: 'whatever', 
            body: 'Do not Look at that markdown file.'
          },
        ] 
      }
    );
  });

  it('filters an object by body from the array', () => {
    const state = {
      markdownList: [  
        { 
          id: 1234,
          title: 'old markDown',
          body: 'Look at that markdown file.'
        },
        { 
          id: 5678,
          title: 'whatever',
          body: 'Do not Look at that markdown file.'
        },
        { 
          id: 1278,
          title: 'new markDown',
          body: 'Super original text.'
        },
        { 
          id: 1788,
          title: 'new whatever',
          body: 'This will have some new words to test and a file.'
        },
      ]
    };

    const action = filterBody('This');

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      {  
        markdownList: [  
          { 
            id: 1234,
            title: 'old markDown',
            body: 'Look at that markdown file.'
          },
          { 
            id: 5678,
            title: 'whatever',
            body: 'Do not Look at that markdown file.'
          },
          { 
            id: 1278,
            title: 'new markDown',
            body: 'Super original text.'
          },
          { 
            id: 1788,
            title: 'new whatever',
            body: 'This will have some new words to test and a file.'
          },
        ],
        'searchResult': [
          { 
            id: 1788,
            title: 'new whatever',
            body: 'This will have some new words to test and a file.'
          },
        ] 
      }
    );
  });
  
});
