import { Component, OnInit } from "@angular/core";
import { Person } from "./Domain/person";
import { TabbedReport } from "./Domain/tabbedreport";
@Component({
  selector: "componentedipartenza",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name: string = "alta formazione";
  importo = 1200;
  stringhe: string[] = [];
  setBorder:boolean=true;
  person = new Person();
  p: Person = new Person("Felipe", "Coury", 36);
  r: TabbedReport = new TabbedReport(["intestazione"], ["dati", "dati1"]);
  a = 10;
  b = 20;
  myVar = "";
  color: string = "red";
  fontSize: number = 12;

  ngOnInit() {
    console.log(this.name);
  }

  onClick() {
    this.stringhe.push(this.name);
    //console.log(this.stringhe);
    console.log(this.r.run());
  }
  myFunc() {}

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
    this.setBorder=!this.setBorder;
    console.log(this.setBorder);
  }
}
