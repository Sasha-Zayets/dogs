const initialState = {
    review: [
        {
            id: 0,
            name: 'Alex 2',
            text: 'lorem text',
            date: '29.1.2020'
        }
    ]
  };
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_REVIEW":
        const { review } = state;
        review.push(action.payload);

        return {...state, review};
      default:
        return state;
    }

};
  
export default reducer;