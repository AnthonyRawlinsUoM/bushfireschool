import { Component, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.css']
})
export class PrimaryNavigationComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
