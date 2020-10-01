import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-get-demo',
  templateUrl: './get-demo.component.html',
  styleUrls: ['./get-demo.component.css']
})
export class GetDemoComponent implements OnInit {
  notFound = false;
  user: User;
  maria = 12;
  fechaDeLaApi = '';
  date = new Date();
  actual = Date.now();
  dateDay = new Date().getDay();
  dolorin = new Date().getDate();


  today: number = Date.now();
  mes = new Date().getMonth().toString();
  dia = this.date.getDay.toString();



  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  signoZodiacal(fecha){

  }
  getUser(userID: string){
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userID).subscribe((userFromTheApi: User)=>{
      if(userFromTheApi.ok == true){
        this.user = userFromTheApi;


        this.fechaDeLaApi = this.user.FechaNacimiento;
        this.dia = this.fechaDeLaApi;
        console.log(this.dia)
        console.log(this.dolorin)

        // if(this.user.FechaNacimiento >= `2090-10-03 00:00:00.000`){
        //   console.log('Prueba pruebita')
        //   console.log(this.fechaDeLaApi);
        //    40225384896
        // }

      }else{
        this.notFound = true;
      }

    },(err: any)=>{
      console.log(err)
      this.notFound = true;
    });
  }

}

