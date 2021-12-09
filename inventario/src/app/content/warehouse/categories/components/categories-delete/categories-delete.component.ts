import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-categories-delete',
  templateUrl: './categories-delete.component.html',
  styleUrls: ['./categories-delete.component.scss']
})
export class CategoriesDeleteComponent implements OnInit {

  public title: string = "Eliminar Categoría";

  constructor(public dialogRef: MatDialogRef<CategoriesDeleteComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
