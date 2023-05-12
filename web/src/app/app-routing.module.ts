import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialTestComponent } from 'src/app/initial-test/initial-test.component';

const routes: Routes = [
  { path: 'initial-test', component: InitialTestComponent },
  { path: '**', redirectTo: 'initial-test', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
