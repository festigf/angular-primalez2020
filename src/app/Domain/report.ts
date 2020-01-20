export class Report {
  data: Array<string>;
  constructor(data: Array<string>) {
    this.data = data;
  }
  run() {
    this.data.forEach(function(line) {
      console.log(line);
    });
  }
}
