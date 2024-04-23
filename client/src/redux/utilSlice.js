import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  utils: {
    newMessage: '',
    receiveId: null,
    updateMessage: null,
  },
};

const utilsSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setNewMessage(state, action) {
      state.utils.newMessage = action.payload;
    },
    setReceiveId(state, action) {
      state.utils.receiveId = action.payload;
    },
    setUpdateMessage(state, action) {
      state.utils.updateMessage = action.payload;
    }
  }
});

export const { setNewMessage, setReceiveId, setUpdateMessage } = utilsSlice.actions;
export default utilsSlice.reducer;