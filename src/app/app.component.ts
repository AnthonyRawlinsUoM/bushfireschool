import { Component, NgModule, EventEmitter } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
