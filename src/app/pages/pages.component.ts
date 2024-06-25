import { Component, OnInit } from '@angular/core';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``,
  standalone: true,
  imports: [BreadcrumbsComponent, HeaderComponent, SidebarComponent]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
