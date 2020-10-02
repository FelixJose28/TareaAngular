import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDemoComponent } from './gets/get-demo/get-demo.component';
import { YoComponent } from './sobremi/yo/yo.component';



@NgModule({
  declarations: [
    AppComponent,
    GetDemoComponent,
    YoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
