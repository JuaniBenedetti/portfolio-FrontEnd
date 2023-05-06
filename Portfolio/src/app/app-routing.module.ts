import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/components/landing/landing.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: ':username', 
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'notFound',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
