import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Presentation } from '../../interfaces/presentation';
import { PresentationsService } from '../../services/presentations.service';

@Component({
  selector: 'inventario-presentations-edit',
  templateUrl: './presentations-edit.component.html',
  styleUrls: ['./presentations-edit.component.scss']
})
export class PresentationsEditComponent implements OnInit {

  public title: string = 'Editar Presentación';

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public presentacion: Partial<Presentation> = {};

  public editPresentation: FormGroup = this.formBuilder.group({
    presentacion: new FormControl('', Validators.required),
    descripcion: new FormControl()
  });

  constructor(
    private presentationsService: PresentationsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getPresentation();
  }

  private getPresentation(): void {
    this.presentationsService.getPresentation(this.getParams()).subscribe((response) => {
      this.presentacion.id = response.id;
      this.presentacion.name = response.name;
      this.presentacion.description = response.description;

      this.editPresentation.patchValue({
        presentacion: response.name,
        descripcion: response.description
      });

      this.loadingPage.style.display = 'none';
    });
  }

  private getParams(): number {
    return parseInt(this.router.url.split("/")[3]);
  }

  public onSubmit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.presentacion.name = this.editPresentation.value.presentacion;
    this.presentacion.description = this.editPresentation.value.descripcion;

    this.presentationsService.updatePresentation(this.presentacion as Presentation).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Presentación ' + response.name +' actualizada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/presentaciones']);
    });
  }

}
