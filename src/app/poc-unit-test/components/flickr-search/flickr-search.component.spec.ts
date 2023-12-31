import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FlickrService } from '../../services/flickr.service';

import { findComponent } from '../../spec-helpers/element.spec-helper';
import { photo1, photos } from '../../spec-helpers/photo.spec-helper';
import { FlickrSearchComponent } from './flickr-search.component';

describe('FlickrSearchComponent', () => {

  let fixture: ComponentFixture<FlickrSearchComponent>;
  let component: FlickrSearchComponent;
  let fakeFlickrService: Pick<FlickrService, keyof FlickrService>;

  let searchForm: DebugElement;
  let photoList: DebugElement;

  beforeEach(async () => {
    fakeFlickrService = {
      searchPublicPhotos: jasmine
        .createSpy('searchPublicPhotos')
        .and.returnValue(of(photos)),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FlickrSearchComponent],
      providers: [{ provide: FlickrService, useValue: fakeFlickrService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  describe('DADO que o componente seja chamado', () => {

    it('ENTÃO deverá ser criado', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(FlickrSearchComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();

      searchForm = findComponent(fixture, 'app-search-form');
      photoList = findComponent(fixture, 'app-photo-list');
    });

    it('ENTÃO deverá renderizar o formulário de pesquisa e a lista de fotos', () => {
      expect(searchForm).toBeTruthy();
      expect(photoList).toBeTruthy();
      expect(photoList.properties.title).toBe('');
      expect(photoList.properties.photos).toEqual([]);

      expect(() => {
        findComponent(fixture, 'app-full-photo');
      }).toThrow();
    });

    describe('DADO que seja passado o termo "beautiful flowers" no formulário', () => {

      it('ENTÃO deverá pesquisar e as fotos para a lista', () => {
        const searchTerm = 'beautiful flowers';
        searchForm.triggerEventHandler('search', searchTerm);
        fixture.detectChanges();

        expect(fakeFlickrService.searchPublicPhotos).toHaveBeenCalledWith(searchTerm);
        expect(photoList.properties.title).toBe(searchTerm);
        expect(photoList.properties.photos).toBe(photos);
      });
    });

    describe('DADO que seja clicado em uma foto da lista', () => {

      it('ENTÃO deverá renderizar a foto inteira', () => {
        expect(() => {
          findComponent(fixture, 'app-full-photo');
        }).toThrow();

        photoList.triggerEventHandler('focusPhoto', photo1);

        fixture.detectChanges();

        const fullPhoto = findComponent(fixture, 'app-full-photo');
        expect(fullPhoto.properties.photo).toBe(photo1);
      });
    });
  });
});
