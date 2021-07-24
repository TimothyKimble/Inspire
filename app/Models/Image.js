export default class Image {
  constructor({ largeImgUrl, author, query }) {
    this.largeImgUrl = largeImgUrl;
    this.author = author;
    this.query = query;
  }


  get Template() {
    return `
    <p>This image was captured by</p>
    <p>${this.author}</p>`


  }
}