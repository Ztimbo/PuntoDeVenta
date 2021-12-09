import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public displayedColumns: string[] = ['name', 'description', 'phoneNumber', 'email', '-'];
  public dataSource: any = [];

  public array: any;
  public pageSize = 3;
  public currentPage = 0;
  public totalSize = 0;

  @ViewChild('providersTable') providersTable: MatTable<Provider> | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    public dialog: MatDialog,
    public readonly providersService: ProvidersService
    ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getArray();
    //this.getProviders();
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

  public sortData($data: any) {
    this.dataSource.sort((x: Provider, y: Provider) => {
      switch($data.active) {
        case 'name': {
          return $data.direction == 'asc' ?
            (x?.name ?? '') < (y?.name ?? '') ? 1 : -1 :
            (x?.name ?? '') < (y?.name ?? '') ? -1 : 1
        }
        case 'description': {
          return $data.direction == 'asc' ?
            (x?.description ?? '') < (y?.description ?? '') ? 1 : -1 :
            (x?.description ?? '') < (y?.description ?? '') ? -1 : 1
        }
        case 'phoneNumber': {
          return $data.direction == 'asc' ?
            (x?.phoneNumber ?? '') < (y?.phoneNumber ?? '') ? 1 : -1 :
            (x?.phoneNumber ?? '') < (y?.phoneNumber ?? '') ? -1 : 1
        }
        case 'email': {
          return $data.direction == 'asc' ?
            (x?.email ?? '') < (y?.email ?? '') ? 1 : -1 :
            (x?.email ?? '') < (y?.email ?? '') ? -1 : 1
        }
        default: {
          return 0;
        }
      }
    });
    this.providersTable?.renderRows();
  }

  public paginateData($event: any) {
    this.currentPage = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.iterator();
  }

  private getArray() {
    this.providersService.getProviders()
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.array = response;
        this.totalSize = this.array.length;
        this.iterator();

        this.loadingPage.style.display = 'none';
      });
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

}
