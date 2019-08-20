
import { Component, OnInit, Input, Output, ElementRef, ViewChild, Renderer, OnDestroy, AfterViewInit } from '@angular/core';
import * as p5 from 'p5';
import * as p5dom from 'p5/lib/addons/p5.dom';

import * as colormap from 'colormap';

let colors = colormap({
  colormap: 'hot',
  nshades: 255,
  format: 'rgbaString',
  alpha: 0.5
});

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particles', { static: false }) particleCanvas: ElementRef;

  canvasWidth: number;
  canvasHeight: number;

  private p5;
  //private p5sound;
  private origin = { x: 0, y: 0 };
  private toggle = true;

  constructor() {
    console.log('particles-constructed');
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    console.log('particles-init');
    this.createCanvas();
  }
  ngAfterViewInit() {
    this.canvasWidth = this.particleCanvas.nativeElement.offsetWidth;
    this.canvasHeight = this.particleCanvas.nativeElement.offsetHeight;
    console.log(this.canvasWidth, this.canvasHeight);
    this.p5.resizeCanvas(this.particleCanvas.nativeElement.offsetWidth, this.particleCanvas.nativeElement.offsetHeight);
    this.p5.setup();
  }

  ngOnDestroy(): void {
    this.createCanvas();
    console.log('particles-destroy');
  }

  private onWindowResize = (e) => {
    this.p5.resizeCanvas(this.particleCanvas.nativeElement.offsetWidth, this.particleCanvas.nativeElement.offsetHeight);
    this.p5.setup();
  }

  private createCanvas = () => {
    console.log('creating particles canvas');
    if (this.toggle) {
      console.log(p5);
      this.p5 = new p5(this.drawing);
      this.toggle = !this.toggle;
    } else {
      this.p5.noCanvas();
      this.toggle = !this.toggle;
    }
  }

  private drawing = function(p: any) {

    let particle_limit = 68;
    p.target_framerate = 60;


    // let Environment = function() {
    //     this.wind = p.createVector(p.random(-2, 2), p.random(-2, 2));
    //     this.turbulence = p.createVector(p.random(-2, 2), p.random(-2, 2));
    // }

    let Particle = function(position) {
      this.acceleration = p.createVector(0.0, 0 - p.random(0.42)); // ie., gravity
      this.velocity = p.createVector(p.random(-2, 2), p.random(-2, 0));
      this.position = position.copy(); // ie., single point origin for all particles
      this.lifespan = 255;
      this.waft = p.createVector(p.random(-0.05, 0.05), p.random(-0.05, 0.05))

    };

    Particle.prototype.run = function() {
      this.update();
      this.display();
    };

    // Method to update position
    Particle.prototype.update = function() {

      this.velocity.add(this.acceleration).add(this.waft);
      this.position.add(this.velocity);
      this.lifespan -= 2;
    };

    // Method to display
    Particle.prototype.display = function() {
      p.stroke(colors[this.lifespan + 1]);
      p.strokeWeight(1 + (0 - this.acceleration.y));

      // p.fill(colors[this.lifespan+1]);
      // p.ellipse(this.position.x, this.position.y, 4, 4);
      p.line(this.position.x - this.velocity.x,
        this.position.y - this.velocity.y,
        this.position.x + this.velocity.x,
        this.position.y + this.velocity.y);

    };

    // Is the particle still useful?
    Particle.prototype.isDead = function() {
      return this.lifespan < 0;
    };

    let ParticleSystem = function(position) {
      console.log(position);

      this.origin = position.copy();

      this.particles = [];
    };

    ParticleSystem.prototype.addParticle = function() {
      let random_start = this.origin;
      random_start.x = p.random(1) * p.windowWidth;
      this.particles.push(new Particle(random_start));
    };

    ParticleSystem.prototype.run = function() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        let p = this.particles[i];
        p.run();
        if (p.isDead()) {
          this.particles.splice(i, 1);  // Garbage collection
        }
      }
    };


    p.setup = () => {
      p.createCanvas(p.width, p.height, 'webgl').parent('particles-canvas');
      p.angleMode(p.DEGREES);
      p.rectMode(p.CENTER);
      p.background(0);
      p.frameRate(p.target_framerate); // Attempt to refresh at starting FPS
      p.system = new ParticleSystem(p.createVector(p.width, p.height + 200));
    };

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.noStroke();
      if (p.system.particles.length < particle_limit) {
        p.system.addParticle();
      }
      p.system.run();

    };
  }


}
