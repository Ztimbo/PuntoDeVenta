import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-brands-delete',
  templateUrl: './brands-delete.component.html',
  styleUrls: ['./brands-delete.component.scss']
})
export class BrandsDeleteComponent implements OnInit {

  public title: string = "Eliminar Marca";

  constructor(public dialogRef: MatDialogRef<BrandsDeleteComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
