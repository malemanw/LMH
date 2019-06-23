import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor(private titleService: Title ) {
    this.titleService.setTitle( "Servicios | Liceo Militar de Honduras" );
   }

  ngOnInit() {
  }

}
