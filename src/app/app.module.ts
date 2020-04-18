import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  'hammerjs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {DishService} from './service/dish.service';
import{PromotionsService} from './service/promotions.service'
import{LeaderService} from './service/leader.service'
import { MenuComponent } from './menu/menu.component';  
import { HeaderComponent } from './header/header.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule


  ],
  providers: [
    DishService,
    PromotionsService,
    LeaderService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
