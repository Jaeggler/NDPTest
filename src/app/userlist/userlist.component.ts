import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component ({
  selector: 'app-userlist',
  templateUrl: 'userlist.component.html'
})

export class UserListComponent implements OnInit{

  public users;

  constructor(private apiservice: ApiService) {}

  ngOnInit(){
    this.apiservice.getUserList()
    .subscribe ((incomingdata) => {
      console.log(incomingdata);
      this.users = incomingdata['data'];
    });

    this.apiservice.DeleteUser()
      .subscribe ((incomingdata) => {
        console.log(incomingdata['code']);
    });
  }

}
