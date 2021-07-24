import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandboxApi } from "./AxiosService.js";


class ImagesService {
  async getNewImage() {
    const res = await sandboxApi.get('/images')
    console.log(res.data);

    ProxyState.activeImage = new Image(res.data)
  }
}

export const imagesService = new ImagesService();