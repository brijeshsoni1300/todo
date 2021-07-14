export const initialState = {
  notes: [],
  
};


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NOTE":
      //Logic for adding item to basket
      return {
        ...state,
        notes: [...state.notes, action.item],
      };
    case "REMOVE_NOTE":
      //Logic from reomvig from basket

      let newNotes = [...state.notes];

      const index = state.notes.findIndex((note) => note.id === action.id)
       console.log("index: ",index)
      if(index >= 0){
        newNotes.splice(index, 1);
      }

      return { ...state, notes: newNotes };
    default:
      return state;
  }
};

export default reducer;
