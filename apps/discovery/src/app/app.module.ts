import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/main/app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginatorDirective } from './components/list/directives/paginator.directive';
import { PaginatorComponent } from './components/list/components/paginator/paginator.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '@discovery/shared';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [ AppComponent, DashboardComponent, PaginatorDirective, PaginatorComponent, ListComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
