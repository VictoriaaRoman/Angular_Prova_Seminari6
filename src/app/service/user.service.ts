import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Employee } from '../app.component';
import { Employee } from 'src/models/employee';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3002/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/all');
  }

  eliminarUser(id: String): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  } 

  añadirUser(user: User): Observable<any>{
    return this.http.post(this.url, user);
  }

  actualizarUser(id:String, user: User): Observable<any>{
    return this.http.put(this.url + '/' + id, user);
  }

}
