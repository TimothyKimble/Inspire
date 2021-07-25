import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";

function _draw() {
  let template = ''
  ProxyState.tasks.forEach(task => {
    template += task.Template
  })
  document.getElementById('tasks').innerHTML = `<div class="d-flex justify-content-center flex-column"><h6 class="text-center">Tasks</h6><p class="m-0 text-center ">${ProxyState.tasks.filter(x => x.completed).length}/${ProxyState.tasks.length}</p></div>` + template
}

export default class TasksController {
  constructor() {
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', () => { console.log('new Task') })

    _draw()
    this.getAllTodos()
  }
  async getAllTodos() {
    try {
      await tasksService.getAllTodos()
    } catch (error) {
      console.error(error)
    }
  }

  createTask() {
    event.preventDefault()
    let form = event.target
    // @ts-ignore
    let newTask = new Task({ completed: false, description: form.task.value, user: 'user-id', _id: undefined })
    console.log(newTask);
    tasksService.createTask(newTask)
    // @ts-ignore
    form.reset()
  }

  toggleTask(id) {

    console.log(id, ProxyState.tasks)
    const existingTask = ProxyState.tasks.find(x => x._id === id)
    if (!existingTask) {
      return
    }
    existingTask.completed = !existingTask.completed
    tasksService.toggleTask(existingTask)

  }

  async removeTask(id) {
    try {
      await tasksService.removeTask(id)
    } catch (error) {
      console.error(error)
    }

  }

}