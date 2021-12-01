import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Provider } from '../../interfaces/provider';
import { ProvidersDeleteComponent } from '../providers-delete/providers-delete.component';

@Component({
  selector: 'inventario-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {

  public title: string = "Proveedores";
  public ELEMENT_DATA: Provider[] = [
    { providerId: 1, name: 'Provider 1', description: '', phoneNumber: '1111111111', email: 'provider1@email.com' },
    { providerId: 2, name: 'Provider 2', description: '', phoneNumber: '1111111111', email: 'provider2@email.com' },
    { providerId: 3, name: 'Provider 3', description: '', phoneNumber: '1111111111', email: 'provider3@email.com' },
    { providerId: 4, name: 'Provider 4', description: '', phoneNumber: '1111111111', email: 'provider4@email.com' }
  ];

  displayedColumns: string[] = ['name', 'description', 'phoneNumber', 'email', '-'];
  dataSource = this.ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProvidersDeleteComponent, {
      width: '250px',
    });
  }

}
