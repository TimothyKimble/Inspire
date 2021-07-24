import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js";


class QuotesService {

  async getNewQuote() {
    const res = await sandboxApi.get('/quotes')
    console.log(res.data);

    ProxyState.activeQuote = new Quote(res.data)
  }
}


export const quotesService = new QuotesService();