import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers-edit',
  templateUrl: './providers-edit.component.html',
  styleUrls: ['./providers-edit.component.scss']
})
export class ProvidersEditComponent implements OnInit {

  public title: string = 'Editar Proveedor';

  constructor() { }

  ngOnInit(): void {
  }

}
