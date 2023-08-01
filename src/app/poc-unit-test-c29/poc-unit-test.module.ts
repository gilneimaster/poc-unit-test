import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PocUnitTestRoutingModule} from "./poc-unit-test-routing.module";
import {PocUnitTestComponent} from "./components/poc-unit-test/poc-unit-test.component";
import {FlickrSearchComponent} from "./components/flickr-search/flickr-search.component";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import {PhotoListComponent} from "./components/photo-list/photo-list.component";
import {PhotoItemComponent} from "./components/photo-item/photo-item.component";
import {FullPhotoComponent} from "./components/full-photo/full-photo.component";
import {FlickrService} from "./services/flickr.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    PocUnitTestComponent,
    FlickrSearchComponent,
    SearchFormComponent,
    PhotoListComponent,
    PhotoItemComponent,
    FullPhotoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PocUnitTestRoutingModule,
  ],
  providers: [FlickrService]
})
export class PocUnitTestModule { }
