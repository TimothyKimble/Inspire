import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeathersService {
  async getNewWeather() {
    const res = await sandboxApi.get('/weather')
    console.log(res.data)
    ProxyState.activeWeather = new Weather(res.data)
  }



  getCelsius() {
    (ProxyState.activeWeather - 32) * (5 / 9)
    console.log(ProxyState.activeWeather)
  }

}

export const weathersService = new WeathersService();