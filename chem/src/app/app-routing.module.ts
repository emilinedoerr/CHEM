import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { BiochemComponent } from './biochem/biochem.component';
import { GeneralComponent } from './general/general.component';
import { OrganicComponent } from './organic/organic.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'biochem', component: BiochemComponent },
  { path: 'organic', component: OrganicComponent },
  { path: 'general', component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
