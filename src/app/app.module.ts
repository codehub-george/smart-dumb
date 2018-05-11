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
import { HeadingComponent } from './shared/heading/heading.component';
import { ListCheckComponent } from './shared/list-check/list-check.component';
import { ListComponent } from './shared/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    VegetablesComponent,
    HomeComponent,
    DumpComponent,
    SmartComponent,
    HeadingComponent,
    ListCheckComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AvailabilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
