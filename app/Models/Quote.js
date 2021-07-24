

export default class Quote {
  constructor({ content, author }) {
    this.body = content;
    this.author = author;
  }

  get Template() {
    return `
   <div class="quote"> <p class="text-center ">${this.body}</p><div class="author">
<p class="text-center ">${this.author}</p></div></div>`
  }

}
