import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import {StatusBar} from "ionic-native";
import {Platform} from "ionic-angular";
import {TabsContainerComponent} from "../pages/tabs-container/tabs-container.component";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  rootPage = TabsContainerComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
