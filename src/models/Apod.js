export class Apod {
  constructor(data) {
    this.url = data.hdurl || data.url
    this.title = data.title
    this.explination = data.explanation
  }
}
