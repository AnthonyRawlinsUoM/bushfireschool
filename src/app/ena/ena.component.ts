import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ena',
  templateUrl: './ena.component.html',
  styleUrls: ['./ena.component.css']
})
export class EnaComponent implements OnInit {
  responseJson: string;
  
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  pingApi() {
    this.api.ping$().subscribe(
      res => this.responseJson = res
    );
  }

}
