import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Provider } from '../../interfaces/provider';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-providers-edit',
  templateUrl: './providers-edit.component.html',
  styleUrls: ['./providers-edit.component.scss']
})
export class ProvidersEditComponent implements OnInit {

  public title: string = 'Editar Proveedor';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public provider: Partial<Provider> = {};

  public editProvider: FormGroup = this.formBuilder.group({
    proveedor: new FormControl('', Validators.required),
    descripcion: new FormControl(),
    telefono: new FormControl(),
    correo: new FormControl()
  });

  constructor(
    private providersService: ProvidersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getProvider();
  }

  private getProvider(): void {
    this.providersService.getProvider(this.getParams()).subscribe((response) => {
      this.provider.id = response.id;
      this.provider.name = response.name;
      this.provider.description = response.description;
      this.provider.phoneNumber = response.phoneNumber;
      this.provider.email = response.email;

      this.editProvider.patchValue({
        proveedor: response.name,
        descripcion: response.description,
        telefono: response.phoneNumber,
        correo: response.email
      });

      this.loadingPage.style.display = 'none';
    });
  }

  private getParams(): number {
    return parseInt(this.router.url.split("/")[3]);
  }

  public onSubmit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.provider.name = this.editProvider.value.proveedor;
    this.provider.description = this.editProvider.value.descripcion;
    this.provider.phoneNumber = this.editProvider.value.telefono;
    this.provider.email = this.editProvider.value.correo;

    this.providersService.updateProvider(this.provider as Provider).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Proveedor ' + response.name +' actualizado', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/proveedores']);
    });
  }

}
