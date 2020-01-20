import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ng-class-example",
  templateUrl: "./ng-class-example.component.html",
  styleUrls: ["./ng-class-example.component.css"]
})
export class NgClassExampleComponent implements OnInit {
  @Input() setBorder: boolean = false;
  isBordered: boolean=false;
  classesObj: Object;
  classList: string[];

  constructor() {
    this.classesObj = {
      bordered: this.setBorder
    };
  
  }

  ngOnInit() {
    this.isBordered = this.setBorder;
    console.log(this.setBorder);
    this.classList = ["blue", "round"];
    //this.toggleBorder();
  }

  toggleBorder(): void {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered
    };
  }
}
