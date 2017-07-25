import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectibleService } from "app/shared/collectibles.service";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'market', component: MarketComponent},
{path: 'collection', component: CollectionComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketComponent,
    CollectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollectibleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
