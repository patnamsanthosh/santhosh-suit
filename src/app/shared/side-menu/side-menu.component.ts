import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})), 
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed', 
      animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
  ]
})
export class SideMenuComponent implements OnInit {
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() public item!:NavItem;
  @Input() public depth!:number;
  @Input() public menuText: boolean | undefined;

  dashboardNavItems: NavItem[] = [
    
    {
    displayName: 'Home Management',
    iconName: 'settings',
    route: 'dashboard/home-management',
    children: []
  },{
    displayName: 'Home Page Management',
    iconName: 'settings_applications',
    route: 'dashboard/home-page-management',
    children: []
  }
]

  constructor(public navService: NavService,
    public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
    this.navService.currentUrl.subscribe((url:string)=> {
      if(this.item && this.item.route && url) {
        this.expanded = url.indexOf(`/${this.item.route}`) == 0;
        this.ariaExpanded = this.expanded;
      }
    })
  }

  onItemSelected(item: NavItem) {
    if(!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }

    if(item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}