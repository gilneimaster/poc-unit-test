import 'zone.js/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo } from '../../models/photo';
import { click, findEl } from '../../spec-helpers/element.spec-helper';
import { photo1, photo1Link } from '../../spec-helpers/photo.spec-helper';
import { PhotoItemComponent } from './photo-item.component';

describe('PhotoItemComponent', () => {

  let component: PhotoItemComponent;
  let fixture: ComponentFixture<PhotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoItemComponent);
    component = fixture.componentInstance;
    component.photo = photo1;
    fixture.detectChanges();
  });

  describe('DADO que o componente seja renderizado', () => {

    it('ENTÃO deverá ser criado', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    describe('E o atributo "photo" for nulo', () => {

      it('ENTÃO não faz nada enquanto "photo" não for populado', () => {
        component.photo = null;
        fixture.detectChanges();

        expect(() => {
          findEl(fixture, 'photo-item-link');
        }).toThrow();
      });
    });
    describe('E o atributo "photo" não for nulo', () => {

      it('ENTÃO deverá renderizar o link e miniatura', () => {
        const link = findEl(fixture, 'photo-item-link');
        expect(link.properties.href).toBe(photo1Link);

        const img = findEl(fixture, 'photo-item-image');
        expect(img.properties.src).toBe(photo1.url_q);
        expect(img.properties.alt).toBe(photo1.title);
      });

      it('ENTÃO deverá focalizar uma foto', () => {
        let photo: Photo | undefined;

        component.focusPhoto.subscribe((otherPhoto: Photo) => {
          photo = otherPhoto;
        });

        click(fixture, 'photo-item-link');

        expect(photo).toBe(photo1);
      });
    });
  });
});
