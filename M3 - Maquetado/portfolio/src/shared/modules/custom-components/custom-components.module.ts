import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/shared/components/login/login.component';
import { NavbarComponent } from 'src/shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    NavbarComponent
  ]
})
export class CustomComponentsModule { }
