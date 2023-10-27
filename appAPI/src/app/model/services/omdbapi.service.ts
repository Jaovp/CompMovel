import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class OmdbapiService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'c5d7a1f2';

  constructor(private http : HttpClient) { }

  getAll(title : string, type : SearchType) : Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`);
  }

  getById(id : any) : Observable<any> {
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}
