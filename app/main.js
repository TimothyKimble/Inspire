import TasksController from "./Controllers/TasksController.js";
import Clock from "./Controllers/ClockController.js";
import QuoteController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";
import WeathersController from "./Controllers/WeatherController.js";
class App {
  tasksController = new TasksController();

  clockController = new Clock();

  quoteController = new QuoteController()

  imageController = new ImagesController()

  weatherController = new WeathersController()

}

window["app"] = new App();
