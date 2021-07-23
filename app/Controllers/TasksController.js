import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { tasksService } from "../Services/TasksService.js";
import NotificationService from "../Services/NotificationService.js";

function _draw() {
  let template = ''
  let tasks = ProxyState.tasks
  tasks.forEach(task => template += task.Template)
  document.getElementById('tasks').innerHTML = template
}
export default class TasksController {
  constructor() {
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)


    loadState()
  }

  addTask(id) {
    event.preventDefault()
    let form = event.target
    let newTask = {
      id,
      // @ts-ignore
      name: form.task.value,
    }
    tasksService.addTask(newTask)
    // @ts-ignore
    form.reset()
  }

  toggledTaskSelection(taskId) {
    console.log(taskId, ProxyState.tasks)
    const existingTask = ProxyState.tasks.find(x => x.id === taskId)
    existingTask.checked = !existingTask.checked
    tasksService.toggledTaskSelection()
  }
  async removeTask(id) {
    console.log(id)
    if (await NotificationService.confirmAction("Are you sure you want to delete this task?") === true) {
      tasksService.removeTask(id)
      NotificationService.toast("Deleted Successfully")
    }
  }

  onPageLoad(id) {
    // @ts-ignore
    document.getElementById(id).checked = false
  }


}