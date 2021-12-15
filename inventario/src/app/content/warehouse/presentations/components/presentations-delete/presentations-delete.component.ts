import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PresentationsService } from '../../services/presentations.service';

@Component({
  selector: 'app-presentations-delete',
  templateUrl: './presentations-delete.component.html',
  styleUrls: ['./presentations-delete.component.scss']
})
export class PresentationsDeleteComponent implements OnInit {

  public title: string = "Eliminar Presentación";
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<PresentationsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {presentationId: number},
    private presentationsService: PresentationsService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deletePresentation() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.presentationsService.deletePresentation(this.data.presentationId).subscribe(() => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Presentación eliminada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.onNoClick();
    });
  }

}
