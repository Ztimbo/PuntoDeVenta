import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Provider } from '../../interfaces/provider';
import { ProvidersService } from '../../services/providers.service';
import { ProvidersDeleteComponent } from '../providers-delete/providers-delete.component';

@Component({
  selector: 'inventario-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {

  public title: string = "Proveedores";

  public displayedColumns: string[] = ['name', 'description', 'phoneNumber', 'email', '-'];
  public dataSource: Provider[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly providersService: ProvidersService
    ) { }

  ngOnInit(): void {
    this.getProviders();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProvidersDeleteComponent, {
      width: '250px',
    });
  }

  public getProviders(): void {
    this.providersService.getProviders().subscribe((response: Provider[]) => {
      this.dataSource = response;
    });
  }

}
