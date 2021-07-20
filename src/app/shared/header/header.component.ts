import { Component, OnInit } from '@angular/core';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {Component} from '@angular/core'

@Component({
/*   selector: 'toolbar-basic-example',
  templateUrl: 'toolbar-basic-example.html',
  styleUrls: ['toolbar-basic-example.css'], */
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
