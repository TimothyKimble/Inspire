import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";


class TasksService {



  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
  }
  destroy(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }


  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }

  toggledTaskSelection(id) {
    ProxyState.tasks = [...ProxyState.tasks]
  }
}

export const tasksService = new TasksService()
