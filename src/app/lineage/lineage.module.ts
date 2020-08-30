import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { SystemComponent } from './system/system.component';
import { SystemLineageV1Component } from './system-lineage-v1/system-lineage-v1.component';



@NgModule({
  declarations: [BarComponent, SystemComponent, SystemLineageV1Component],
  imports: [
    CommonModule
  ],
  exports:[
    BarComponent,SystemComponent,SystemLineageV1Component
  ]
})
export class LineageModule { }
