import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";



function _draw() {
  document.getElementById('quote').innerHTML = ProxyState.activeQuote.Template
}
export default class QuoteController {
  constructor() {
    ProxyState.on('activeQuote', _draw)

    this.getNewQuote()
  }

  async getNewQuote() {
    try {
      await quotesService.getNewQuote()
    } catch (error) {
      console.error(error)
    }
  }
}