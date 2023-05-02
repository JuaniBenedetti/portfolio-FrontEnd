import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';




@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    TooltipModule,
    DividerModule,
    CardModule,
    ImageModule,
    KnobModule
  ],
  exports: [
    ButtonModule,
    TooltipModule,
    DividerModule,
    CardModule,
    ImageModule,
    KnobModule
  ]
})
export class PrimengComponentsModule { }
