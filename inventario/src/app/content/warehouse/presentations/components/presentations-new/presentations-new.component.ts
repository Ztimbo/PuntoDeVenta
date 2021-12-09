import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentations-new',
  templateUrl: './presentations-new.component.html',
  styleUrls: ['./presentations-new.component.scss']
})
export class PresentationsNewComponent implements OnInit {

  public title: string = 'Nueva Presentación';

  constructor() { }

  ngOnInit(): void {
  }

}
