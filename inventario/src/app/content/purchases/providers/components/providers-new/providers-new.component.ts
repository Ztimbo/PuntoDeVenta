import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Provider } from '../../interfaces/provider';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-providers-new',
  templateUrl: './providers-new.component.html',
  styleUrls: ['./providers-new.component.scss']
})
export class ProvidersNewComponent implements OnInit {

  public title: string = 'Nuevo Proveedor';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public proveedor: Partial<Provider> = {};

  public nuevoProveedor: FormGroup = this.formBuilder.group({
    proveedor: new FormControl('', Validators.required),
    descripcion: new FormControl(),
    telefono: new FormControl(),
    correo: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private providersService: ProvidersService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.proveedor.name = this.nuevoProveedor.value.proveedor;
    this.proveedor.description = this.nuevoProveedor.value.descripcion;
    this.proveedor.phoneNumber = this.nuevoProveedor.value.telefono;
    this.proveedor.email = this.nuevoProveedor.value.correo;

    this.providersService.saveProvider(this.proveedor as Provider).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Proveedor ' + response.name +' creado', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/proveedores']);
    });
  }

}
