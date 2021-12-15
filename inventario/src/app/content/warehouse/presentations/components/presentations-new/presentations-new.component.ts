import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Presentation } from '../../interfaces/presentation';
import { PresentationsService } from '../../services/presentations.service';

@Component({
  selector: 'app-presentations-new',
  templateUrl: './presentations-new.component.html',
  styleUrls: ['./presentations-new.component.scss']
})
export class PresentationsNewComponent implements OnInit {

  public title: string = 'Nueva Presentación';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public presentacion: Partial<Presentation> = {};

  public nuevaPresentacion: FormGroup = this.formBuilder.group({
    presentacion: new FormControl('', Validators.required),
    descripcion: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private presentationsService: PresentationsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.presentacion.name = this.nuevaPresentacion.value.presentacion;
    this.presentacion.description = this.nuevaPresentacion.value.descripcion;

    this.presentationsService.savePresentation(this.presentacion as Presentation).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Presentación ' + response.name +' creada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/presentaciones']);
    });
  }

}
