import { Component, OnInit } from '@angular/core';
import * as P5 from 'p5';


@Component({
  selector: 'app-particle-system',
  templateUrl: './particle-system.component.html',
  styleUrls: ['./particle-system.component.css']
})
export class ParticleSystemComponent implements OnInit {

  private p5;

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }
  private createCanvas() {
    this.p5 = new P5(this.sketch);
  }

  private sketch(p: any) {
    p.setup = () => {
      p.createCanvas(700, 600);
    };

    p.draw = () => {
      p.background(255);
      p.fill(0);
      p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }
}
