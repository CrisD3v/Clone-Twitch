import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  CanalesF : string[];
  constructor() { 
    this.CanalesF = ['ImNio','n0ted','pelukaa','pelicanger','jhdlacruz','Westcol'];
  }

  ngOnInit(): void {
  }

}
