import ProjectGoal from "./ProjectGoal";

class Project {
    readonly key: string;
    readonly title: string;
    readonly focusArea: string;
    readonly location: string;
    readonly about: string;
    readonly imageUrl: string;
    readonly goals: Array<ProjectGoal>;

    constructor(key: string, title: string, focusArea: string, location: string, about: string, imageUrl: string, goals: Array<ProjectGoal> = []) {
        this.key = key;
        this.title = title;
        this.focusArea = focusArea;
        this.location = location;
        this.about = about;
        this.imageUrl = imageUrl;
        this.goals = goals;
    }
}

export default Project;