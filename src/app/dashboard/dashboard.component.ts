import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from '../shared/side-menu/nav-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false
  constructor() { }

  displayMenu: boolean = false;
  sideMenuOpen: boolean = true;
  contentMargin: number = 220;
  contentMarginMax: number = 220;
  contentMarginMin: number = 48;

  

  navItems: NavItem[] = [
    // {
    //   displayName: 'Home',
    //   iconName: 'home',
    //   route:'dashboard/home'
    // },
    {
    displayName: 'Dashboard',
    iconName: 'home',
    route:'dashboard',
    children: [
    //   {
    //   displayName: 'Home Management',
    //   iconName: 'settings',
    //   route: 'dashboard/home-management',
    //   children: []
    // },{
    //   displayName: 'Home Page Management',
    //   iconName: 'settings_applications',
    //   route: 'dashboard/home-page-management',
    //   children: []
    // }
  ]
  },
  {
    displayName: 'Support Tools',
    iconName: 'build',
    route: 'support-home',
    children: []
  },
  {
    displayName: 'eManifest',
    iconName: 'opacity',
    route: 'dashboard/emanifest-home',
    children: []
    
  },
  {
    displayName: 'Sample Docs',
    iconName: 'receipt',
    route: 'sampledoc-home',
    children: []
  }
]

  ngOnInit() {
    this.displayMenu = true;
  }

  updateSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
    if (this.sideMenuOpen) {
      this.contentMargin = this.contentMarginMax;
    } else {
      this.contentMargin = this.contentMarginMin;
    }
  }

  expandMenu() {
    if (!this.sideMenuOpen) {
      this.updateSideMenu()
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}