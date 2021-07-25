import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeathersService {
  async getNewWeather() {
    const res = await sandboxApi.get('/weather')
    console.log(res.data)
    ProxyState.activeWeather = new Weather(res.data)
  }





}

export const weathersService = new WeathersService();