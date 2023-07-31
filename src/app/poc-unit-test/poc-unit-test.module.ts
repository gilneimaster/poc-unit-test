import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PocUnitTestRoutingModule} from "./poc-unit-test-routing.module";
import {PocUnitTestComponent} from "./components/poc-unit-test/poc-unit-test.component";

@NgModule({
  declarations: [
    PocUnitTestComponent
  ],
  imports: [
    CommonModule,
    PocUnitTestRoutingModule,
  ],
  providers: []
})
export class PocUnitTestModule { }
