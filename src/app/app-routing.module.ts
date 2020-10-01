import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { YoComponent } from './sobremi/yo/yo.component';
import { GetDemoComponent } from './gets/get-demo/get-demo.component'

const routes: Routes = [
{path: '', redirectTo:'/get-demo', pathMatch: 'full'},
{path: "sobremi", component: YoComponent},
{path: "get-demo", component: GetDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
