import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers-new',
  templateUrl: './providers-new.component.html',
  styleUrls: ['./providers-new.component.scss']
})
export class ProvidersNewComponent implements OnInit {

  public title: string = 'Nuevo Proveedor';

  constructor() { }

  ngOnInit(): void {
  }

}
