import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Presentation } from '../../interfaces/presentation';
import { PresentationsService } from '../../services/presentations.service';
import { PresentationsDeleteComponent } from '../presentations-delete/presentations-delete.component';

@Component({
  selector: 'app-presentations-list',
  templateUrl: './presentations-list.component.html',
  styleUrls: ['./presentations-list.component.scss']
})
export class PresentationsListComponent implements OnInit {

  public title: string = "Presentaciones";

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public displayedColumns: string[] = ['name', 'description', '-'];
  public dataSource: Presentation[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly presentationsService: PresentationsService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PresentationsDeleteComponent, {
      width: '250px',
    });
  }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getPresentations();
  }

  public getPresentations(): void {
    this.presentationsService.getPresentations().subscribe((response: Presentation[]) => {
      this.dataSource = response;
      this.loadingPage.style.display = 'none';
    });
  }

}
