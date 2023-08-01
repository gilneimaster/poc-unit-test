import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PocUnitTestComponent} from "./components/poc-unit-test/poc-unit-test.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PocUnitTestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocUnitTestRoutingModule { }
