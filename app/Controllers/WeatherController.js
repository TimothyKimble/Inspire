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

  getFarenheit(temp) {
    temp = Math.floor(((temp - 273.15) * 1.8) + 32);
    document.getElementById('temp').innerHTML = `${temp} <span>&#8457;</span>`
    console.log(ProxyState.activeWeather)
  }

  getCelsius(temp) {
    temp = Math.floor(temp - 273.15);
    document.getElementById('temp').innerHTML = `${temp} <span>&#8451;</span>`
    console.log(ProxyState.activeWeather)
  }

  getKelvin(temp) {
    document.getElementById('temp').innerHTML = `${temp} <span>&#8490;</span>`
    console.log(ProxyState.activeWeather)
  }

}