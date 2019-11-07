import { Component, NgModule, EventEmitter, OnInit } from '@angular/core';
import { routerTransition } from './router.animations';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'site';

  constructor(private auth: AuthService) {}


  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
  
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
