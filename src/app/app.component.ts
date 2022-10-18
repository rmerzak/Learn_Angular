import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service';
import { UsersdataService } from './services/usersdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  users:any;
  constructor(private userdata:UsersdataService) {
    userdata.users().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
}
