import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"

class TasksService {

  async getAllTodos() {
    const res = await sandboxApi.get('/TimothyKimble/todos')
    console.log(res.data)
    ProxyState.tasks = res.data.map(t => new Task(t))
    console.log(ProxyState.tasks);
  }



  async createTask(task) {

    const res = await sandboxApi.post('/TimothyKimble/todos', task)
    task._id = res.data._id
    console.log(res, task);
    ProxyState.tasks = [...ProxyState.tasks, task]

  }

  async toogleTask(task) {
    console.log('got to service');
    const res = await sandboxApi.put(`/TimothyKimble/todos/`, task)
    console.log('put task')
    task.completed = true
    ProxyState.tasks = [...ProxyState.tasks, task]


  }

  async removeTask(id) {

    const res = await sandboxApi.delete(`/TimothyKimble/todos/${id}`)
    console.log('deleted task')
    ProxyState.tasks = ProxyState.tasks.filter(t => t._id !== id)
  }



}

export const tasksService = new TasksService()