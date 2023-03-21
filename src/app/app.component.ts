import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import {UserService} from './service/user.service';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {


  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.obtenerUsers();
  }

  obtenerUsers(){
    this._userService.getUsers().subscribe(data => {
      console.log(data);
/*      for(let i=0; i < data.length; i++){
        this.employees.push(data[i]);
      }*/
    }, error => {
      console.log(error);
    })
  }

  eliminarUser(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this._userService.eliminarUser(id).subscribe(data => {
        this.users = [];
        this.obtenerUsers();    
      }, error => {
        console.log(error);
      })
    }    
  }

  agregarUser(){
    this._userService.añadirUser(this.model).subscribe(data => {
      this.users = [];
      this.obtenerUsers();
      this.model = {_id:'',name:'',surname:'',email:'',password:''};  
    }, error => {
      console.log(error);
    })
  }

  editarUser(id:string){
    this._userService.actualizarUser(id,this.model2).subscribe(data =>{
      this.model2 = {_id:'',name:'',surname:'',email:'',password:''};
      this.hideUpdate = true;
      this.users = [];
      this.obtenerUsers();
    }, error => {
      console.log(error);
    })
  }

  title:string = 'Example APIRest CRUD';  

  users: User [] = [];

  model:User = {_id:'',name:'',surname:'',email:'',password:''};
  model2:User = {_id:'',name:'',surname:'',email:'',password:''};
  msg:string = '';
  hideUpdate:boolean = true;

  myValue = 0;
  editUser(i:number):void{
    this.hideUpdate = false;
    this.model2._id = this.users[i]._id;
    this.model2.name = this.users[i].name;
    this.model2.surname = this.users[i].surname;
    this.model2.email = this.users[i].email;
    this.model2.password = this.users[i].password;
    this.myValue = i;
  }
  
  closeAlert():void{
    this.msg = '';
  }

}
