import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-canales-f',
  templateUrl: './lista-canales-f.component.html',
  styleUrls: ['./lista-canales-f.component.css']
})
export class ListaCanalesFComponent implements OnInit {
  @Input() lista !: string;
  constructor() {}

  ngOnInit(): void {
  }

}
