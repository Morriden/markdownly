export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (data, id) => ({
  type: UPDATE_MARKDOWN,
  payload: {
    data,
    id
  }
});

export const NEW_MARKDOWN = 'NEW_MARKDOWN';
export const newMarkdown = title => ({
  type: NEW_MARKDOWN,
  //this payload can become an empty function later
  payload: {
    id: Date.now(),
    title: title,
    body: ''
  }
});

export const UPDATE_ID = 'UPDATE_ID';
export const updateID = (id) => ({
  type: UPDATE_ID,
  payload: id
});
