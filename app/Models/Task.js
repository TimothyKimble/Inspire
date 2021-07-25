import { ProxyState } from "../AppState.js"

export default class Task {
  constructor({ completed, description, user, _id }) {
    this.completed = completed;
    this.description = description;
    this.user = user;
    this._id = _id;

  }

  get Template() {
    return `
    <li class="row d-flex text-wrap my-1">
    <div class="col-8  d-flex align-items-center">
    <input type="checkbox" ${this.completed ? 'checked' : ''} class=" d-flex" onclick="app.tasksController.toggleTask('${this._id}')" >
    <label for="${this.description}" class="strikethrough"> <p class="m-0 pl-1 strikethrough">${this.description}</p></label> 
    </div> 
    <div class="col-1 d-flex p-0 justify-content-center">
    <span class="action txt-danger d-flex justify-content-end " onclick="app.tasksController.removeTask('${this._id}')">
    <i class="d-flex align-self-center fa fa-md fa-trash action text-danger" title="delete task" ></i>
    </span>
    </div>
    </li>`
  }


}
