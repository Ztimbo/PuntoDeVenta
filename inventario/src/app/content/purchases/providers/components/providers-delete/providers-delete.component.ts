import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-providers-delete',
  templateUrl: './providers-delete.component.html',
  styleUrls: ['./providers-delete.component.scss']
})
export class ProvidersDeleteComponent implements OnInit {

  public title: string = "Eliminar Proveedor";
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<ProvidersDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {providerId: number},
    private providersService: ProvidersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deleteProvider() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.providersService.deleteProvider(this.data.providerId).subscribe(() => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Proveedor eliminado', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.onNoClick();
    });
  }

}
