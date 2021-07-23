import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js";

export function saveState() {
  localStorage.setItem('tasks', JSON.stringify({
    tasks: ProxyState.tasks,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('tasks'))
  console.log(data)
  if (data != null) {
    ProxyState.tasks = data.tasks.map(t => new Task(t))
  }

}