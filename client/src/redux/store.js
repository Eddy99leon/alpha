import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import messageReducer from './MessageSlice.js';
import utilReducer from './utilSlice.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    util: utilReducer,
  },
});

export default store;