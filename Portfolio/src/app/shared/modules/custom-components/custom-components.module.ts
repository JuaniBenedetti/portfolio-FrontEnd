import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LoginComponent } from '../../components/login/login.component';
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
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    InformacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    ItemExperienciaComponent,
    ItemEducacionComponent,
    ItemSkillComponent,
    ItemProyectoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengComponentsModule
  ],
  exports: [
    LoginComponent,
    NavbarComponent,
    InformacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    ItemExperienciaComponent,
    ItemEducacionComponent,
    ItemSkillComponent,
    ItemProyectoComponent
  ]
})
export class CustomComponentsModule { }
