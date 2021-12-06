import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-new',
  templateUrl: './categories-new.component.html',
  styleUrls: ['./categories-new.component.scss']
})
export class CategoriesNewComponent implements OnInit {

  public title: string = 'Nueva Categoría';

  constructor() { }

  ngOnInit(): void {
  }

}
