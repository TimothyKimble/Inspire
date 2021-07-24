import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import Image from "../Models/Image.js";



function _draw() {

  document.body.style.backgroundImage = `url('${ProxyState.activeImage.largeImgUrl}')`;
  console.log("drew image");
  document.getElementById('photographer').innerHTML = ProxyState.activeImage.Template
}

export default class ImagesController {
  constructor() {
    ProxyState.on('activeImage', _draw)

    this.getNewImage()
  }

  async getNewImage() {
    try {
      await imagesService.getNewImage()
    } catch (error) {
      console.error(error)
    }
  }
}