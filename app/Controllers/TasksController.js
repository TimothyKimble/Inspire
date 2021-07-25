import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";

function _draw() {
  let template = ''
  ProxyState.tasks.forEach(task => {
    template += task.Template
  })
  document.getElementById('tasks').innerHTML = template

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
    let newTask = new Task({ completed: false, description: form.task.value, user: 'user-id', _id: undefined })
    console.log(newTask);
    tasksService.createTask(newTask)
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