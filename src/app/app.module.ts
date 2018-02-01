import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app.routing';


import { AppComponent } from './app.component';

import { JsonService } from './services/json.service';
import { ResponseComponent } from './components/response/response.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { MultiplePipe } from './pipes/multiple.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    NavComponent,
    FilterPipe,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
