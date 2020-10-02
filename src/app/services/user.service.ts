import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }
  getUser(userId: string): Observable<any>{
    return this.http.get(`https://api.adamix.net/apec/cedula/${userId}`);
  }
}
