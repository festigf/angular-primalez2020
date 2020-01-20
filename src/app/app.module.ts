import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProvaComponent } from './prova/prova.component';

import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { EsempioSwitchComponent } from './esempio-switch/esempio-switch.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,DemoMaterialModule],
  declarations: [ AppComponent, HelloComponent, ProvaComponent, NgIfElseComponent, EsempioSwitchComponent, NgClassExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
