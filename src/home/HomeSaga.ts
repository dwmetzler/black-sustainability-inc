import HomeActions, {HomeAction, HomeActionTypes} from "./HomeActions";
import { takeLatest, put, takeEvery } from 'redux-saga/effects';
//import ApiClient from "../api/ApiClient";

export default (/*apiClient: ApiClient*/) => {
    return {
        //fetchChores,
        saga,
    };

    /*function* fetchChores() {
        const fetchedChores = apiClient.fetchChores();
        yield put(ToDoActions.fetchChoresDidSucceed(fetchedChores));
    }

    function* updateProject({ project }: ToDoAction) {
        if(project == undefined) {
            console.error("Cannot update undefined project");
            return;
        }
        console.log('updating project: ', project);
        console.log(apiClient);
        const updatedProject = apiClient.patchProject(project);
        yield put(ToDoActions.updateProjectDidSucceed(updatedProject));
        yield put(ToDoActions.choreListLayoutInvalid());
    }*/

    function* saga() {
        //yield takeLatest(ToDoActionTypes.FETCH_CHORES, fetchChores);
        //yield takeLatest(ToDoActionTypes.UPDATE_PROJECT, updateProject);
    }
}