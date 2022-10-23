import { userReducer } from "./user/reducer";
import { combineReducers, createStore, Store } from 'redux';

const reducers = combineReducers({
  user: userReducer
})

export const store: Store = createStore(
  reducers
)

export type RootState = ReturnType<typeof store.getState>;