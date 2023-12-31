import { ComponentFixture, TestBed } from '@angular/core/testing';

import { findEl, setFieldValue } from '../../spec-helpers/element.spec-helper';
import { SearchFormComponent } from './search-form.component';

const searchTerm = 'flowers';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('DADO que o componente seja chamado', () => {

    it('ENTÃO deverá ser criado', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });

  describe('Dado que um termo seja inserido no formulário', () => {

    it('ENTÃO deverá submeter o termo inserido', () => {
      const preventDefault = jasmine.createSpy('submit preventDefault');

      let actualSearchTerm: string | undefined;

      component.search.subscribe((otherSearchTerm: string) => {
        actualSearchTerm = otherSearchTerm;
      });

      setFieldValue(fixture, 'search-term-input', searchTerm);

      findEl(fixture, 'form').triggerEventHandler('submit', { preventDefault });

      expect(actualSearchTerm).toBe(searchTerm);
      expect(preventDefault).toHaveBeenCalled();
    });
  });
});
