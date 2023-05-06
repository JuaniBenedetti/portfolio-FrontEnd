import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    TooltipModule,
    DividerModule,
    CardModule,
    ImageModule,
    KnobModule,
    DynamicDialogModule,
    InputTextModule,
    ToastModule,
    InputTextareaModule,
    InputMaskModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  exports: [
    ButtonModule,
    TooltipModule,
    DividerModule,
    CardModule,
    ImageModule,
    KnobModule,
    DynamicDialogModule,
    InputTextModule,
    ToastModule,
    InputTextareaModule,
    InputMaskModule,
    CalendarModule,
    ConfirmDialogModule
  ]
})
export class PrimengComponentsModule { }
