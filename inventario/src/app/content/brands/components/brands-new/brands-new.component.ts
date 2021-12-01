import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-new',
  templateUrl: './brands-new.component.html',
  styleUrls: ['./brands-new.component.scss']
})
export class BrandsNewComponent implements OnInit {

  public title: string = 'Nueva Marca';

  constructor() { }

  ngOnInit(): void {
  }

}
