import { UPDATE_MARKDOWN, NEW_MARKDOWN, DELETE_MARKDOWN } from '../actions/actions';


export const initialState = {
  markdownList: [  
    { 
      id: 1234,
      title: 'whatever', 
      body: 'Look at that markdown file.'
    },
    { 
      id: 5678,
      title: 'new tab', 
      body: 'Look at this new markdown file.'
    },
  ]
}; 

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdownList: state.markdownList.map(markdown => {
        if(markdown.id === action.payload.id) {
          return { ...markdown, body: action.payload.data };
        } else {
          return markdown;
        }
      }) 
      };
    case NEW_MARKDOWN:
      return {  
        ...state,
        markdownList: [...state.markdownList, action.payload]  
      };
    case DELETE_MARKDOWN:
      return {
        markdownList: state.markdownList.filter(markdown => 
          markdown.id !== action.payload || markdown.id === 1234
        )
      };
    default:
      return state;
  }
}
