import { createStore } from "redux";
import { rootReducer } from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./persist";

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
    saveState(store.getState());
})