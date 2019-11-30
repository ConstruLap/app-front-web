import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../pages/dash/dash.component';
import { CursoComponent } from '../pages/curso/curso.component';


const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'curso', component: CursoComponent },
  { path: '', component: DashComponent }
];

@NgModule({
  exports: [RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
