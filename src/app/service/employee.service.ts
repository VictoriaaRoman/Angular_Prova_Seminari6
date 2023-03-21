import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Employee } from '../app.component';
import { Employee } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  eliminarEmployee(id: String): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  } 

  añadirEmployee(employee: Employee): Observable<any>{
    return this.http.post(this.url, employee);
  }

  actualizarEmployee(id:String, employee: Employee): Observable<any>{
    return this.http.put(this.url + '/' + id, employee);
  }

}
