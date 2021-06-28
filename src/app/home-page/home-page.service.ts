import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  countryName = 'United States';
  constructor(private httpClient: HttpClient) { }

  getSpecificCountryData() {
   return  this.httpClient.get<any>('https://corona.lmao.ninja/v2/countries/'+ this.countryName +'?yesterday=true&strict=true&query');
  }

  getAllDetailsOfCovid() {
    return this.httpClient.get<any>('https://api.covidtracking.com/v1/us/daily.json');
  }
}
