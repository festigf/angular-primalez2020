import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio-switch',
  templateUrl: './esempio-switch.component.html',
  styleUrls: ['./esempio-switch.component.css']
})
export class EsempioSwitchComponent implements OnInit {
  choice=1;
  constructor() { }

  ngOnInit() {
  }
 nextChoice()
 {
   this.choice++;
 }
}