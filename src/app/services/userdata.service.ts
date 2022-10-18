import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {name:'Peter', age:12, email:'peter@gmail.com'},
      {name:'Peter', age:12, email:'peter@gmail.com'},
      {name:'Peter', age:12, email:'peter@gmail.com'},
      {name:'Peter', age:12, email:'peter@gmail.com'},
      {name:'Peter', age:12, email:'peter@gmail.com'}
    ]
  }
}
