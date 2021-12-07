import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-edit',
  templateUrl: './brands-edit.component.html',
  styleUrls: ['./brands-edit.component.scss']
})
export class BrandsEditComponent implements OnInit {

  public title: string = 'Editar Marca';

  constructor() { }

  ngOnInit(): void {
  }

}
