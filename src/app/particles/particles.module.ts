import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleSystemComponent } from './particle-system/particle-system.component';



@NgModule({
  declarations: [ParticleSystemComponent],
  imports: [
    CommonModule
  ],
  exports: [ParticleSystemComponent]
})
export class ParticlesModule { }
