import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _draw() {
  document.getElementById('weather').innerHTML = ProxyState.activeWeather.Template
}





export default class WeathersController {
  constructor() {
    ProxyState.on('activeWeather', _draw)

    this.getNewWeather()
  }



  async getNewWeather() {
    try {
      await weathersService.getNewWeather()
    } catch (error) {
      console.error(error)
    }
  }

  async changeWeather() {
    try {
      await weathersService.changeWeather()
    } catch (error) {
      console.error(error)
    }
  }

}