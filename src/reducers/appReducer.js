import { UPDATE_MARKDOWN, NEW_MARKDOWN, DELETE_MARKDOWN, FILTER_TITLE,  FILTER_BODY } from '../actions/actions';


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
    case FILTER_TITLE: 
      return {
        ...state,
        searchResult: 
        // state.markdownList.map(markdown => {
        //   if(markdown.title.toLowerCase() === (action.payload.includes())) {
        //     return
            state.markdownList
              .filter(markdown => markdown.title.toLowerCase()
                .includes(action.payload.toLowerCase())).map(filteredBody => filteredBody)
      };

        
      
      
      // .include}s(action.payload.toLowerCase())) 
      // .map(filteredTitle => filteredTitle)
      

      
      /*
      these may need IDs to work properly with actions and selectors? I'm not sure, it's
      late and I'm tired. I'm thinking use the getMarkdown selector since we already wrote
      it and just need to update with objects current ID... 
      */
    
    case FILTER_BODY: 
      return {
        ...state,
        searchResult: state.markdownList
          .filter(markdown => markdown.body.toLowerCase()
            .includes(action.payload.toLowerCase())).map(filteredBody => filteredBody)
      };
      
    default:
      return state;
  }
}
