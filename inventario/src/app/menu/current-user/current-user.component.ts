import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventario-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {

  public userType: string = 'Administrador';
  public userName: string = 'Dario Herrera';

  constructor() { }

  ngOnInit(): void {
  }

}
