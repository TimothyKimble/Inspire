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


  async removeTask(id) {
    try {
      await tasksService.removeTask(id)
    } catch (error) {
      console.error(error)
    }

  }

  async toogleTask(completed) {
    console.log("calling to service");
    try {
      await tasksService.toogleTask(completed)
      console.log('called Service');
    } catch (error) {

      console.error(error)

    }
  }
}