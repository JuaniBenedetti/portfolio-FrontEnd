import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PrimengComponentsModule } from '../primeng-components/primeng-components.module';
import { InformacionComponent } from '../../components/informacion/informacion.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';
import { EducacionComponent } from '../../components/educacion/educacion.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { ProyectoComponent } from '../../components/proyecto/proyecto.component';
import { ItemExperienciaComponent } from '../../components/items/item-experiencia/item-experiencia.component';
import { ItemEducacionComponent } from '../../components/items/item-educacion/item-educacion.component';
import { ItemSkillComponent } from '../../components/items/item-skill/item-skill.component';
import { ItemProyectoComponent } from '../../components/items/item-proyecto/item-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginDialogComponent } from '../../components/dialogs/login-dialog/login-dialog.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { EducacionDialogComponent } from '../../components/dialogs/educacion-dialog/educacion-dialog.component';
import { ExperienciaDialogComponent } from '../../components/dialogs/experiencia-dialog/experiencia-dialog.component';
import { InformacionDialogComponent } from '../../components/dialogs/informacion-dialog/informacion-dialog.component';
import { ProyectoDialogComponent } from '../../components/dialogs/proyecto-dialog/proyecto-dialog.component';
import { SkillDialogComponent } from '../../components/dialogs/skill-dialog/skill-dialog.component';



@NgModule({
  declarations: [
    LandingComponent,
    NotFoundComponent,
    NavbarComponent,
    InformacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    ItemExperienciaComponent,
    ItemEducacionComponent,
    ItemSkillComponent,
    ItemProyectoComponent,
    FooterComponent,
    LoginDialogComponent,
    EducacionDialogComponent,
    ExperienciaDialogComponent,
    InformacionDialogComponent,
    ProyectoDialogComponent,
    SkillDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengComponentsModule
  ],
  exports: [
    LandingComponent,
    NotFoundComponent,
    NavbarComponent,
    InformacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    ItemExperienciaComponent,
    ItemEducacionComponent,
    ItemSkillComponent,
    ItemProyectoComponent,
    FooterComponent,
    LoginDialogComponent,
    EducacionDialogComponent,
    ExperienciaDialogComponent,
    InformacionDialogComponent,
    ProyectoDialogComponent,
    SkillDialogComponent
  ]
})
export class CustomComponentsModule { }
