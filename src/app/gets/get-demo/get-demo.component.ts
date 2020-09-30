import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-demo',
  templateUrl: './get-demo.component.html',
  styleUrls: ['./get-demo.component.css']
})
export class GetDemoComponent implements OnInit {
  notFound = false;
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  getUser(userID: string){
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userID).subscribe((userFromTheApi: User)=>{
      if(userFromTheApi.ok == true){
        this.user = userFromTheApi;
      }else{
        this.notFound = true;
      }

    },(err: any)=>{
      console.log(err)
      this.notFound = true;
    });
  }

}
