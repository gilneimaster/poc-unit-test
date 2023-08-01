import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import {PocUnitTestComponent} from "./poc-unit-test.component";
import { PocUnitTestModule } from "../../poc-unit-test.module";

describe('PocUnitTestComponent', () => {

  let component: PocUnitTestComponent;
  let fixture: ComponentFixture<PocUnitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PocUnitTestModule
      ],
      declarations: [ PocUnitTestComponent ],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(PocUnitTestComponent);
    component = fixture.componentInstance;
  });

  describe('DADO que o componente for chamado', () => {
    it('ENTÃO deverá ser criado', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });
});
