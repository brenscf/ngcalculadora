import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecladoComponent } from './teclado/teclado.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: TecladoComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
