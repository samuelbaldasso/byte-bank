import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovatransferenciaComponent } from './novatransferencia/novatransferencia.component';

export const routes: Routes = [
  {path: ' ', redirectTo: 'extrato', pathMatch:  'full'},
  {path:  'extrato',  component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovatransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
