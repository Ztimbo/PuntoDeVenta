import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { ProvidersService } from 'src/app/content/purchases/providers/services/providers.service';
import { BrandsService } from 'src/app/content/warehouse/brands/services/brands.service';
import { ProductsService } from 'src/app/content/warehouse/products/services/products.service';

@Component({
  selector: 'inventarios-principal-dashboard',
  templateUrl: './principal-dashboard.component.html',
  styleUrls: ['./principal-dashboard.component.scss']
})
export class PrincipalDashboardComponent implements OnInit {

  public title = "Información General";

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public indicatorElementRed = 'red';
  public indicatorElementYellow = 'yellow';
  public indicatorElementBlue = 'blue';
  public indicatorElementPurple = 'purple';
  public indicatorElementGreen = 'green';
  public indicatorElementGrey = 'grey';

  public indicatorElementProvider = 'local_shipping';
  public indicatorElementBrand = 'style';
  public indicatorElementProduct = 'shopping_basket';
  public indicatorElementMostSoldProduct = 'stars';
  public indicatorElementAlmostOutOfStock ='warning';
  public indicatorElementNextOrderScheduled ='schedule';

  public indicatorElementProviderHeader = 'Proveedores';
  public indicatorElementProviderContent = '';

  public indicatorElementBrandHeader = 'Marcas';
  public indicatorElementBrandContent = '';

  public indicatorElementProductHeader = 'Productos';
  public indicatorElementProductContent = '';

  public indicatorElementMostSoldProductHeader = 'Más Vendido';
  public indicatorElementMostSoldProductContent = 'Paracetamol';

  public indicatorElementAlmostOutOfStockHeader = 'Por Terminar';
  public indicatorElementAlmostOutOfStockContent = 'Aspirina';

  public indicatorElementAlmostNextOrderScheduledHeader = 'Prox. Entrega';
  public indicatorElementAlmostNextOrderScheduledContent = '15/02/2022';

  //Line chart start
  public lineChartData: ChartDataSets[] = [
    { data: [61, 59, 80, 65, 45, 55, 40, 56, 76, 65, 77, 60], label: 'Apple' },
    { data: [57, 50, 75, 87, 43, 46, 37, 48, 67, 56, 70, 50], label: 'Mi' },
    { data: [70, 98, 45, 67, 12, 45, 67, 87, 36, 68, 99, 85], label: 'Samsung' }
  ];
  
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
  public lineChartOptions = {
    responsive: true,
  };
     
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  //Line chart end

  //Doughnut chart start
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  //Doughnut chart end

  //Radar chart start
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';
  //Radar chart end

  //Bar chart start
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  //Bar chart end

  constructor(
    public readonly providersService: ProvidersService,
    public readonly brandsService: BrandsService,
    public readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadingPage.style.display = 'grid';
    
    this.getNumberOfProviders();
    this.getNumberOfBrands();
    this.getNumberOfProducts();
  }

  public getNumberOfProviders(): void {
    this.providersService.getProviders().subscribe((response) => {
      this.indicatorElementProviderContent = response.length.toString();
    });
  }

  public getNumberOfBrands(): void {
    this.brandsService.getBrands().subscribe((response) => {
      this.indicatorElementBrandContent = response.length.toString();
    });
  }

  public getNumberOfProducts(): void {
    this.productsService.getProducts().subscribe((response) => {
      this.indicatorElementProductContent = response.length.toString();
      this.loadingPage.style.display = 'none';
    });
  }

}
