import TasksController from "./Controllers/TasksController";

class App {
  tasksController = new TasksController();
}

window["app"] = new App();
