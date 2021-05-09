import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()

//API for getting currency rates
export class CurrencyService {

    API_KEY = 'a9bc368cb8399ced1edc';

    constructor(public http: HttpClient) {}

    getCountries() {
        return this.http.get(`https://free.currencyconverterapi.com/api/v6/currencies?apiKey=${this.API_KEY}`).toPromise();            
    }

    getExchangeRate(from: String, to: String){
        return this.http.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y&apiKey=${this.API_KEY}`).toPromise();    
    }

}