import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {


  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.obtenerEmployees();
  }

  obtenerEmployees(){
    this._employeeService.getEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;
/*      for(let i=0; i < data.length; i++){
        this.employees.push(data[i]);
      }*/
    }, error => {
      console.log(error);
    })
  }

  eliminarEmployee(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this._employeeService.eliminarEmployee(id).subscribe(data => {
        this.employees = [];
        this.obtenerEmployees();    
      }, error => {
        console.log(error);
      })
    }    
  }

  agregarEmployee(){
    this._employeeService.añadirEmployee(this.model).subscribe(data => {
      this.employees = [];
      this.obtenerEmployees();
      this.model = {_id:'',name:'',position:'',office:'',salary:0};  
    }, error => {
      console.log(error);
    })
  }

  editarEmployee(id:string){
    this._employeeService.actualizarEmployee(id,this.model2).subscribe(data =>{
      this.model2 = {_id:'',name:'',position:'',office:'',salary:0};
      this.hideUpdate = true;
      this.employees = [];
      this.obtenerEmployees();
    }, error => {
      console.log(error);
    })
  }

  title:string = 'Angular CRUD';  

  employees: Employee [] = [];

  model:Employee = {_id:'',name:'',position:'',office:'',salary:0};
  model2:Employee = {_id:'',name:'',position:'',office:'',salary:0};
  msg:string = '';
  hideUpdate:boolean = true;

  myValue = 0;
  editEmployee(i:number):void{
    this.hideUpdate = false;
    this.model2._id = this.employees[i]._id;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.office = this.employees[i].office;
    this.myValue = i;
  }
  
  closeAlert():void{
    this.msg = '';
  }

}
