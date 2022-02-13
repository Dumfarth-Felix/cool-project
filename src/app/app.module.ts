import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoolComponent } from './cool/cool.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CoolComponent] //Bootstrap entfernen und mit entryComponents ersetzen
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(){
    const coolElement = createCustomElement(CoolComponent, {injector: this.injector});
    customElements.define('app-cool', coolElement);
  }
}
