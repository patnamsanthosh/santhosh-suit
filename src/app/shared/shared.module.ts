import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        SideMenuComponent,
        HeaderComponent
    ],
    imports: [        
        CommonModule,
        MatIconModule,        
        MatListModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports: [
        MatIconModule,        
        MatListModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        SideMenuComponent,
        HeaderComponent
    ],
    providers: []
  })
  export class SharedModule { }