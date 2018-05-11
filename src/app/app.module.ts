import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { DumpComponent } from './examples/dumb/dumb.component';
import { SmartComponent } from './examples/smart/smart.component';
import { AvailabilityService } from './availability.service';


@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    VegetablesComponent,
    HomeComponent,
    DumpComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AvailabilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
