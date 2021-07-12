import { all, fork } from 'redux-saga/effects';
import Home from './home';
//import ApiClient from "./api/ApiClient";

function startSagas(...sagas: any) {
    return function* appSaga() {
        yield all(sagas.map((saga: any) => fork(saga)));
    };
}

export default (/*apiClient: ApiClient*/) => {
    return startSagas(
        Home.sagaInitializer(/*apiClient*/).saga,
    );
};

