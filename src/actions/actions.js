export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (data) => ({
  type: UPDATE_MARKDOWN,
  payload: data
});

export const NEW_MARKDOWN  = 'NEW_MARKDOWN';
export const newMarkdown = () => ({
  type: NEW_MARKDOWN,
  //this payload can become an empty function later
  payload: {
    id: Date.now(),
    title: '',
    body: ''
  }
});
