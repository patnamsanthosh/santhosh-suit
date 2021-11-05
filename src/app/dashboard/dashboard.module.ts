import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.route.module";


@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule
    ],
    providers: []
  })
  export class DashboardModule { }