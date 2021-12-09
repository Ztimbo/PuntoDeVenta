import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit {

  public title: string = 'Editar Categoría';

  constructor() { }

  ngOnInit(): void {
  }

}
