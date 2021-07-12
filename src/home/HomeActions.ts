import Project from "../api/models/Project";

export enum HomeActionTypes {
    // CHORE_LIST_DATA_DID_CHANGE = 'todo/CHORE_LIST_DATA_DID_CHANGE',
    // CHORE_LIST_LAYOUT_INVALID = 'todo/CHORE_LIST_LAYOUT_INVALID',
    // FETCH_CHORES = 'todo/FETCH_ITEMS',
    FETCH_CURRENT_PROJECTS_DID_SUCCEED = 'todo/FETCH_CURRENT_PROJECT_DID_SUCCEED',
    // SET_PROJECT_TO_EDIT = 'todo/SET_PROJECT_TO_EDIT',
    // SET_TASK_TO_EDIT = 'todo/SET_TASK_TO_EDIT',
    // UPDATE_PROJECT = 'todo/UPDATE_PROJECT',
    // UPDATE_PROJECT_DID_SUCCEED = 'todo/UPDATE_PROJECT_DID_SUCCEED',
}

export type HomeAction = {
    type: HomeActionTypes;
    // chores?: Array<IChore>;
    // index?: number;
    projects?: Array<Project>;
    // task?: Task;
    // chore?: IChore;
}

class HomeActions {

    [s: string]: (...args: any[]) => HomeAction;
    //
    // choreListDataDidChange = (newChoreList: Array<IChore>) => ({
    //     type: ToDoActionTypes.CHORE_LIST_DATA_DID_CHANGE,
    //     chores: newChoreList
    // });
    //
    // choreListLayoutInvalid = () => ({ type: ToDoActionTypes.CHORE_LIST_LAYOUT_INVALID });
    //
    // fetchChores = (): ToDoAction => ({ type: ToDoActionTypes.FETCH_CHORES });
    //
    fetchCurrentProjectsDidSucceed = (fetchedProjects: Array<Project>): HomeAction => ({
        type: HomeActionTypes.FETCH_CURRENT_PROJECTS_DID_SUCCEED,
        projects: fetchedProjects
    });
    //
    // setProjectToEdit = (project: Project): ToDoAction => ({
    //     type: ToDoActionTypes.SET_PROJECT_TO_EDIT,
    //     project
    // });
    //
    // setTaskToEdit = (task: Task): ToDoAction => ({
    //     type: ToDoActionTypes.SET_TASK_TO_EDIT,
    //     task
    // });
    //
    // updateProject = (updatedProject: Project) => {
    //     console.log("updateProject action");
    //     return {
    //         type: ToDoActionTypes.UPDATE_PROJECT,
    //         project: updatedProject,
    //     }
    // };
    //
    // updateProjectDidSucceed = (updatedProject: Project) => ({
    //     type: ToDoActionTypes.UPDATE_PROJECT_DID_SUCCEED,
    //     project: updatedProject,
    // });

}

export default new HomeActions();