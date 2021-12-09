import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentations-edit',
  templateUrl: './presentations-edit.component.html',
  styleUrls: ['./presentations-edit.component.scss']
})
export class PresentationsEditComponent implements OnInit {

  public title: string = 'Editar Presentación';

  constructor() { }

  ngOnInit(): void {
  }

}
