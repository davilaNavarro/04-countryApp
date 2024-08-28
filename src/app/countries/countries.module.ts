import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';
import { ContriesRoutingModule } from './countries-routing.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPagesComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    ContriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
