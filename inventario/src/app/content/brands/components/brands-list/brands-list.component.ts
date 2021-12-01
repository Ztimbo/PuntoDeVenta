import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Brand } from '../../interfaces/brand';
import { BrandsDeleteComponent } from '../brands-delete/brands-delete.component';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {

  public title: string = "Marcas";
  public ELEMENT_DATA: Brand[] = [
    { brandId: 1, name: 'Pfitzer', description: 'Pfitzer desc' },
    { brandId: 2, name: 'Bayer', description: 'Bayer desc' },
    { brandId: 3, name: 'Johnson & Johnson', description: 'Johnson & Johnson desc' },
    { brandId: 4, name: 'Moderna', description: 'Moderna desc' }
  ];

  displayedColumns: string[] = ['name', 'description', '-'];
  dataSource = this.ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BrandsDeleteComponent, {
      width: '250px',
    });
  }

  ngOnInit(): void {
  }

}
