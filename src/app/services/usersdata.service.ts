import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient) { }

  users() {
    return this.http.get('https://lab-demo.joona.fr/apiconf/api/v1/platforms/all',
    {headers: new HttpHeaders().set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
}
