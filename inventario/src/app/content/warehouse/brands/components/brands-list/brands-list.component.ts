import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Brand } from '../../interfaces/brand';
import { BrandsService } from '../../services/brands.service';
import { BrandsDeleteComponent } from '../brands-delete/brands-delete.component';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {

  public title: string = "Marcas";

  public displayedColumns: string[] = ['name', 'description', '-'];
  public dataSource: Brand[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly brandsService: BrandsService
    ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BrandsDeleteComponent, {
      width: '250px',
    });
  }

  ngOnInit(): void {
    this.getBrands();
  }

  public getBrands(): void {
    this.brandsService.getBrands().subscribe((response: Brand[]) => {
      this.dataSource = response;
    });
  }

}
