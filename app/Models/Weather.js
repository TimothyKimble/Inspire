export default class Weather {
  constructor({ main, weather, }) {
    this.main = Math.floor(((main.temp - 273.15) * 1.8) + 32);
    this.weather = weather[0].description
  }

  get Template() {

    return `
    <div class="col-md-1 d-flex justify-content-end align-items-end m-0 mt-3">
    <i class="fa fa-cloud  fa-2x align-self-center" onclick="app.weatherController.changeWeather()" aria-hidden="true">

        </i></div>
    <div class="col-md-1 d-flex align-items-center flex-column align-items-end mt-3 mr-3 p-0">
    <div class="d-flex p-0">
        
        <h3 class="m-0 d-flex justify-content-center"><span id="celsius">${this.main} <span>&#8457;</span></span></h3>
    </div>
    <h5>${this.weather}</h5>
</div>`
  }



}