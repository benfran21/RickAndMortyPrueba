import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { logginComponent } from './loggin/loggin.component';

const routes: Routes = [
  {path: '', redirectTo:'/loggin', pathMatch:'full'},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'episodios', component: EpisodiosComponent},
  {path: 'loggin', component: logginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
