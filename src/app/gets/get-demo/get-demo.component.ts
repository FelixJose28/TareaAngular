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

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  obtenerZodiaco() {
    let dia;
    let mes;

    dia = Number(this.user.FechaNacimiento.substring(8, 10))
    mes = Number(this.user.FechaNacimiento.substring(5, 7))

  if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
    return ('Aries');
  if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
    return ('Libra');
  if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
    return ('Tauro');
  if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
    return ('Escorpio');
  if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
    return ('Geminis');
  if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
    return ('Sagitario');
  if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
    return ('Cancer');
  if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
    return ('Capricornio');
  if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
    return ('Leo');
  if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
    return ('Acuario');
  if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
    return ('Virgo');
  if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
    return ('Piscis');
  }
  obtenerEdad(fechaAEdad) {

    let fechaNacimiento = new Date(fechaAEdad);
    let fechaActual = new Date();
    let edadPersona

    edadPersona = (fechaActual.getFullYear() - fechaNacimiento.getFullYear())

    return edadPersona
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

