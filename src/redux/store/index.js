import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { loadState, saveState } from '../localStorage/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk],
  preloadedState: persistedState,
  devTools: true,
});

store.subscribe(() => {
  saveState({
    token: store.getState().token,
  });
});

export default store;
