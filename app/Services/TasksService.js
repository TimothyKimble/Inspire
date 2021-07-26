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
    console.log(res, task);
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]

  }

  async toggleTask(task) {
    console.log(task);
    const res = await sandboxApi.put(`/TimothyKimble/todos/${task._id}`, task)
    console.log('toggled Task');
    res.data.completed = task.completed
    ProxyState.tasks = [...ProxyState.tasks]




  }

  async removeTask(id) {

    const res = await sandboxApi.delete(`/TimothyKimble/todos/${id}`)
    console.log('deleted task')
    ProxyState.tasks = ProxyState.tasks.filter(t => t._id !== id)
  }



}

export const tasksService = new TasksService()