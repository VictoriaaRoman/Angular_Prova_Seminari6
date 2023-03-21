import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  public active : boolean = false;
  constructor() {}
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }
}
