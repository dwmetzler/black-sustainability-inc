import HomeActions, {HomeAction, HomeActionTypes} from "./HomeActions";
import Project from "../api/models/Project";
import ProjectGoal from "../api/models/ProjectGoal";

export type HomeState = {
    currentProjects: Array<Project>;
}

const dummyGoals: Array<ProjectGoal> = [
    new ProjectGoal("Produce food sustainably", "Increase food availability to curb undernourishment and increase food security in the community"),
    new ProjectGoal("Provide decent livelihoods", "Provide employment opportunities and contribute to community development"),
    new ProjectGoal("Improve biodiversity", "Expanding to grow other fruits, vegetables, herbs, spices (and also do beekeeping)"),
    new ProjectGoal("Give back", "5% of the annual profit will be used to help education, healthcare, sanitation and afforestation"),
];
const dummyProject1 = new Project(
    "1",
    "Nia OT Foods Limited",
    "Sustainable Agriculture and Global Community",
    "Ghana",
    "Theophilus Owusu is developing a regenerative moringa agroforestry project.\nMoringa is the main crop on his property, while vetiva, citronella, plantain and lemongrass serve as cover crops and provide soil + water conservation. These crops also provide food and medicine to be used in essential oil production and local roofing.",
    "https://static.wixstatic.com/media/af8b67_60006b87ad324631bc0fad57a942856b~mv2.png/v1/fill/w_916,h_516,al_c,q_90,usm_0.66_1.00_0.01/Screen%20Shot%202020-09-14%20at%206_12_59%20PM.webp",
    dummyGoals);

const dummyGoals2: Array<ProjectGoal> = [
    new ProjectGoal("Preserve Maroon Culture", "Make space for edutainment, arts & merchandising, workshops, and an herbal center"),
    new ProjectGoal("Create community", "Benefit the wider Maroon community of visual, literary and performing artists of Portland Parish, Jamaica"),
    new ProjectGoal("Share cultural arts", "Provide a space to share our cultural arts with the wider world and welcome visitors from all walks of life"),
];
const dummyProject2 = new Project(
    "2",
    "The Granny Nanny Cultural Group",
    "Global Community",
    "Jamaica",
"We are a traditional Jamaican Maroon performing arts ensemble, which consists of community-based artists, musicians, drummers, storytellers, craftspeople and herbal healers from the Windward Maroon capital and UNESCO World Heritage Site of Moore Town and the larger Rio Grande Valley.\nWe are finishing the Granny Nanny Maroon Culture Yawd, a mixed-use space for Live Cultural Edutainment; Arts & Craft Creation & Merchandising; Education & Skills Training Workshops; Jerk Pit & Herbal Center; and an Information Clearinghouse.",
    "https://static.wixstatic.com/media/af8b67_eaaefac8095149468c03e56ed10d3b60~mv2.jpg/v1/fill/w_593,h_703,al_c,q_85/MAROON.webp",
    dummyGoals2);

const initialState: HomeState = Object.freeze({
    currentProjects: [dummyProject1, dummyProject2],
});

const homeReducer = (state: HomeState = initialState, action: HomeAction): HomeState => {
    switch (action.type) {
        // case ToDoActionTypes.FETCH_CHORES:
        //     console.log("FETCH ITEMS REDUCER");
        //     return {
        //         ...state,
        //     };
        //
        case HomeActionTypes.FETCH_CURRENT_PROJECTS_DID_SUCCEED:
            console.log('Fetched current projects: ', action.projects);
            return {
                ...state,
                currentProjects: action.projects || [],
            };
        //
        // case ToDoActionTypes.CHORE_LIST_DATA_DID_CHANGE:
        //     console.log('Updating task data: ', action.chores);
        //     return {
        //         ...state,
        //         chores: action.chores || [],
        //     };
        //
        // case ToDoActionTypes.CHORE_LIST_LAYOUT_INVALID:
        //     const newIndex = state.layoutStateIndex + 1;
        //     console.log('New layout state index: ', newIndex);
        //     return {
        //         ...state,
        //         layoutInvalidationKey: newIndex.toString(),
        //         layoutStateIndex: newIndex
        //     };
        //
        // case ToDoActionTypes.SET_PROJECT_TO_EDIT:
        //     return {
        //         ...state,
        //         editingProject: action.project
        //     };
        //
        // case ToDoActionTypes.SET_TASK_TO_EDIT:
        //     return {
        //         ...state,
        //         editingTask: action.task
        //     };
        //
        // case ToDoActionTypes.UPDATE_PROJECT_DID_SUCCEED: {
        //     const updatedProject = action.project as Project;
        //     return {
        //         ...state,
        //         editingProject: updatedProject
        //     };
        // }

        default:
            return state;
    }
}

const reducer = (state: HomeState = initialState, action: HomeAction): HomeState => {
    return homeReducer(state, action);
};

export default reducer;