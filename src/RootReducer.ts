import {combineReducers} from "redux";
import Home from "./home";

export const HOME_SLICE_NAME = 'home';

export const rootReducer = combineReducers({
    [HOME_SLICE_NAME]: Home.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;