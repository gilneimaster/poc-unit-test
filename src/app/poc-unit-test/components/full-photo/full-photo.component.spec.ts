import 'zone.js/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expectText, findEl } from '../../spec-helpers/element.spec-helper';
import { photo1, photo1Link } from '../../spec-helpers/photo.spec-helper';
import { FullPhotoComponent } from './full-photo.component';

describe('FullPhotoComponent', () => {

  let component: FullPhotoComponent;
  let fixture: ComponentFixture<FullPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullPhotoComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FullPhotoComponent);
    component = fixture.componentInstance;
    component.photo = photo1;
    fixture.detectChanges();
  });
  describe('DADO que o componente seja renderizado', () => {

    it('ENTÃO deverá ser criado', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('ENTÃO deverá carregar a imagem e as informações da imagem', () => {
      expectText(fixture, 'full-photo-title', photo1.title);

      const img = findEl(fixture, 'full-photo-image');
      expect(img.properties.src).toBe(photo1.url_m);
      expect(img.properties.alt).toBe(photo1.title);

      expectText(fixture, 'full-photo-ownername', photo1.ownername);
      expectText(fixture, 'full-photo-datetaken', photo1.datetaken);
      expectText(fixture, 'full-photo-tags', photo1.tags);

      const link = findEl(fixture, 'full-photo-link');
      expect(link.properties.href).toBe(photo1Link);
      expect(link.nativeElement.textContent.trim()).toBe(photo1Link);
    });
  });
});
