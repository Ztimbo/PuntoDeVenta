import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-presentations-delete',
  templateUrl: './presentations-delete.component.html',
  styleUrls: ['./presentations-delete.component.scss']
})
export class PresentationsDeleteComponent implements OnInit {

  public title: string = "Eliminar Presentación";

  constructor(public dialogRef: MatDialogRef<PresentationsDeleteComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
