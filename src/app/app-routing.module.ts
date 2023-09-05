import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'body', component: BodyComponent},
  {path: 'body/personajes', component: PersonajesComponent},
  {path: 'body/episodios', component: EpisodiosComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
